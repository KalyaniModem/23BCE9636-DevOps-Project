/* =========================================================
   PORTFOLIO SCRIPT
   Handles: mobile nav, active-link scroll spy, hero typing
   effect, scroll-reveal animations, animated counters,
   skill bar fill, contact form validation, back-to-top.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initScrollSpy();
  initTypingEffect();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   Mobile nav toggle
--------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu after a link is tapped (mobile)
  links.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   Highlight the nav link for the section in view
--------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active-link",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => spy.observe(section));
}

/* ---------------------------------------------------------
   Typing effect for the hero role line
--------------------------------------------------------- */
function initTypingEffect() {
  const el = document.getElementById("typedRole");
  const roles = [
    "Aspiring Software Developer",
    "AI & ML Enthusiast",
    "Web Developer",
    "Problem Solver",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(tick, 1400); // pause at full word
        return;
      }
    } else {
      charIndex--;
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 90);
  }

  tick();
}

/* ---------------------------------------------------------
   Scroll-reveal for elements + counters + skill bars
--------------------------------------------------------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in-view");

        // If the about-stats block is revealed, animate its counters
        if (entry.target.classList.contains("about-stats")) {
          animateCounters(entry.target);
        }

        // If a skill group is revealed, fill its bars
        if (entry.target.classList.contains("skill-group")) {
          entry.target
            .querySelectorAll(".bar-fill")
            .forEach((bar) => bar.classList.add("animate"));
        }

        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function animateCounters(container) {
  const counters = container.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.count, 10);
    const duration = 1200;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }

    requestAnimationFrame(update);
  });
}

/* ---------------------------------------------------------
   Back-to-top button + header border on scroll
--------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------------------------------------------------
   Contact form validation (client-side only, no backend)
--------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateField(
      nameInput,
      nameInput.value.trim().length >= 2,
      "nameError",
      "Please enter your name (2+ characters)."
    );

    const isEmailValid = validateField(
      emailInput,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()),
      "emailError",
      "Please enter a valid email address."
    );

    const isMessageValid = validateField(
      messageInput,
      messageInput.value.trim().length >= 10,
      "messageError",
      "Message should be at least 10 characters."
    );

    if (isNameValid && isEmailValid && isMessageValid) {
      successMsg.classList.add("show");
      form.reset();
      setTimeout(() => successMsg.classList.remove("show"), 4000);
    }
  });

  // Clear error state as the user types
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
      const errorEl = document.getElementById(`${input.id}Error`);
      if (errorEl) errorEl.textContent = "";
    });
  });
}

function validateField(input, isValid, errorId, message) {
  const errorEl = document.getElementById(errorId);

  if (!isValid) {
    input.classList.add("invalid");
    errorEl.textContent = message;
  } else {
    input.classList.remove("invalid");
    errorEl.textContent = "";
  }

  return isValid;
}