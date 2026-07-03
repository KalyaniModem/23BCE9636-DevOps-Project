# 🚀 DevOps Portfolio Website

A complete DevOps implementation for deploying and monitoring a static portfolio website using Docker, Kubernetes, Jenkins, Nagios, Graphite, and Grafana.

---

## 📌 Project Overview

This project demonstrates the implementation of a complete DevOps workflow for an Online Portfolio Website.

The application is containerized using Docker, deployed using Kubernetes, automated through Jenkins CI/CD, and monitored using Nagios, Graphite, and Grafana.

---

## 🎯 Use Case

**Use Case 3 – Online Portfolio Website**

The objective is to automate the deployment and monitoring of a portfolio website using modern DevOps tools.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Git & GitHub
- Docker
- Docker Hub
- Kubernetes
- Jenkins
- Nagios
- Graphite
- Grafana

---

## 📁 Project Structure

```text
23BCE9636-DevOps-Project/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── Jenkinsfile
├── README.md
└── k8s/
    ├── deployment.yaml
    └── service.yaml
```

---

## ⚙️ Deployment Steps

### 1. Clone Repository

```bash
git clone https://github.com/KalyaniModem/23BCE9636-DevOps-Project.git
```

---

### 2. Build Docker Image

```bash
docker build -t devops-portfolio .
```

---

### 3. Run Docker Container

```bash
docker run -d -p 8080:80 devops-portfolio
```

---

### 4. Push Image to Docker Hub

```bash
docker tag devops-portfolio kalyanimodem/devops-portfolio:latest

docker push kalyanimodem/devops-portfolio:latest
```

---

### 5. Deploy to Kubernetes

```bash
kubectl apply -f k8s/deployment.yaml

kubectl apply -f k8s/service.yaml
```

---

### 6. Configure Jenkins

- Create Jenkins Pipeline
- Connect GitHub Repository
- Build Docker Image
- Push Image to Docker Hub
- Deploy to Kubernetes

---

### 7. Monitoring

- Nagios for infrastructure monitoring
- Graphite for metrics collection
- Grafana for dashboard visualization

---

## 🐳 Docker Hub Repository

https://hub.docker.com/r/kalyanimodem/devops-portfolio

---

## 💻 GitHub Repository

https://github.com/KalyaniModem/23BCE9636-DevOps-Project

---

## 🌐 Application URL

Docker

```
http://localhost:8080
```

Jenkins

```
http://localhost:8081
```

Nagios

```
http://localhost:8090
```

Grafana

```
http://localhost:3000
```

Graphite

```
http://localhost:8082
```

---

## 📊 Monitoring Stack

### Nagios
- Host Monitoring
- Service Monitoring
- HTTP Monitoring
- CPU & Memory Monitoring

### Graphite
- Time-Series Metrics Storage

### Grafana
- Dashboard Visualization
- Graphite Data Source Integration

---

## 📸 Screenshots

Include the following screenshots in your report:

- Docker Desktop
- Docker Running Container
- Docker Hub Repository
- Kubernetes Deployment
- Jenkins Pipeline Success
- Nagios Dashboard
- Graphite Dashboard
- Grafana Dashboard

---

## 👨‍💻 Author

**Modem Kalyani**

**Registration Number:** 23BCE9636

B.Tech CSE (AI & ML)

VIT-AP University

---

## ⭐ Project Status

✅ Dockerized

✅ Pushed to Docker Hub

✅ Kubernetes Deployment Completed

✅ Jenkins CI/CD Configured

✅ Nagios Monitoring Configured

✅ Graphite Installed

✅ Grafana Integrated
