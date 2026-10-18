# 🌐 Harrish R S — AI & Data Science Portfolio

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Status](https://img.shields.io/badge/Status-Open%20to%20Internships-00d4aa?style=flat)](mailto:697harrish@gmail.com)

**Personal Developer Portfolio & Interactive Activity Dashboard**

[Overview](#-overview) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [File Structure](#-file-structure) • [Getting Started](#-getting-started) • [Deployment Guide](#-deployment-guide) • [Configuration](#-configuration) • [Connect](#-connect)

</div>

---

## 📌 Overview

A modern, high-performance personal portfolio website built for **Harrish R S**, an Artificial Intelligence and Data Science undergraduate at **V.S.B. Engineering College, Karur**. 

Designed with a sleek, dark cyber-teal aesthetic, fluid micro-animations, and zero framework overhead (pure Vanilla HTML5, CSS3, and ES6+ JavaScript), this portfolio showcases academic background, technical skills, projects, and professional certifications. Additionally, it features a password-protected **Activity Dashboard & CMS** for managing tasks, skills, and portfolio content directly from the browser.

---

## ✨ Key Features

- **🎨 Modern Dark/Teal UI & Glassmorphism**: Responsive design built with custom CSS design tokens, smooth gradient accents, and fluid scroll animations.
- **⚡ Zero Framework Dependencies**: Fast load times with 100% vanilla HTML, CSS, and modern JavaScript.
- **💼 Interactive Project Showcase**: Filterable cards featuring live preview links, source code links, and tech stack tags.
- **🤖 Dynamic Skills Matrix**: Categorized tech stack covering Programming (Python, Java), AI/ML, Data Science, Tools (Git, MySQL, Power BI), and Soft Skills.
- **📜 Certifications & Credentials**: Preview modal for verified certificates (including IIT Madras CODE & Infosys Springboard).
- **🔐 Password-Protected Activity Dashboard**:
  - Secure modal unlock (`Ctrl + Shift + A` shortcut or via navigation).
  - Built-in Task Tracker (Learning, Projects, Applications, Personal).
  - Dynamic in-browser CMS to edit profile details, add new skills, projects, and achievements.
  - One-click JSON data export and import for seamless backup and synchronization.
- **📄 Instant Resume Integration**: One-click download for cross-device resume access (`resume.pdf`).
- **📬 Functional Contact Form**:
  - Direct email delivery to `697harrish@gmail.com`.
  - Configurable support for FormSubmit, EmailJS, and Formspree.
  - Integrated honeypot spam protection.

---

## 🛠️ Tech Stack

- **Markup & Structure:** Semantic HTML5
- **Styling & Effects:** Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism, CSS Transitions)
- **Client Logic & State:** Modern ES6+ JavaScript (LocalStorage persistence, JSON state management)
- **External Services:**
  - [EmailJS](https://www.emailjs.com/) & FormSubmit for email routing
  - Google Fonts ([Inter](https://fonts.google.com/specimen/Inter), [Outfit](https://fonts.google.com/specimen/Outfit))

---

## 📁 File Structure

```text
harrish-portfolio/
├── 📄 index.html        # Main HTML layout, modals, sections, and dashboard markup
├── 🎨 style.css         # Complete design system, themes, components, and responsive rules
├── ⚙️ script.js         # Core application logic, dashboard auth, task manager, and event handlers
├── 🗃️ data.json         # Structured initial data for profile, timeline, skills, and certifications
├── 🖼️ profile.jpg       # Profile picture displayed in the hero and about sections
├── 📑 resume.pdf        # Downloadable resume file
├── 📜 test_cert.pdf     # Sample certificate document for preview verification
└── 📘 README.md         # Project documentation and guide
```

---

## 🚀 Getting Started

No build step or Node.js environment is required to run the portfolio.

### Option 1: Open Directly
Simply double-click `index.html` or drag it into any modern web browser.

### Option 2: Run with a Local Server (Recommended)

Using **VS Code Live Server**:
1. Install the **Live Server** extension in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

Using **Python**:
```bash
# Python 3.x
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using **Node / npx**:
```bash
npx serve .
```

---

## 🌐 Deployment Guide (Web Services & Static Sites)

Since this project consists of standard static assets (HTML, CSS, JS, JSON, and media files), it can be deployed for **free** on any modern static hosting provider or web service with automatic SSL/HTTPS, global CDN distribution, and continuous deployment.

### 🥇 Option 1: GitHub Pages (Recommended — Fast & Free)

Your project is already connected to GitHub (`https://github.com/harrish-rs-tech/My_Portfolio.git`).

1. Push your latest commits to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio and add deployment docs"
   git push origin main
   ```
2. Navigate to your repository on GitHub: `https://github.com/harrish-rs-tech/My_Portfolio`
3. Click on **Settings** (tab at the top right of the repository).
4. In the left sidebar, click on **Pages** (under the "Code and automation" section).
5. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
6. Click **Save**.
7. Wait 1–2 minutes. Refresh the page to see your live URL:
   > 🚀 **Live URL:** `https://harrish-rs-tech.github.io/My_Portfolio/`

---

### 🥈 Option 2: Vercel (Fastest Global Edge & Custom Domains)

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** → **Project**.
3. Locate `My_Portfolio` in the list of GitHub repositories and click **Import**.
4. In the project configuration screen:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`
   - **Build Command**: *(leave blank)*
   - **Output Directory**: `.` *(or leave default)*
5. Click **Deploy**.
6. Vercel generates a production URL (e.g., `https://my-portfolio-harrish.vercel.app`) with automatic updates on every `git push`.

---

### 🥉 Option 3: Netlify (Continuous Deployment & Form Support)

#### Method A: Git Integration (Auto-deploys on push)
1. Sign in to [netlify.com](https://www.netlify.com/) using GitHub.
2. Click **Add new site** → **Import an existing project**.
3. Select **GitHub** and authorize access to `My_Portfolio`.
4. Configure deployment:
   - **Branch to deploy**: `main`
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.` *(root)*
5. Click **Deploy My_Portfolio**.

#### Method B: Netlify Drop (Instant Drag & Drop without CLI)
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `harrish-portfolio` folder directly into the browser.
3. Your site will be live instantly with a `*.netlify.app` address.

---

### ⚡ Option 4: Cloudflare Pages (Unlimited Bandwidth & DDoS Shield)

1. Sign up/log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the sidebar, select **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your `My_Portfolio` repository.
4. Set build settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/`
5. Click **Save and Deploy**.

---

### ☁️ Option 5: Render (Free Static Web Service)

1. Visit [render.com](https://render.com) and log in.
2. Click **New +** → **Static Site**.
3. Connect your GitHub repository `harrish-rs-tech/My_Portfolio`.
4. Fill in:
   - **Name**: `harrish-portfolio`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.`
5. Click **Create Static Site**.

---

### 📊 Deployment Fields Reference (Static Site vs. Web Service)

When setting up your deployment in platforms like **Render**, **Railway**, **Koyeb**, **Vercel**, or **AWS**, choose according to whether you deploy as a **Static Site** (strongly recommended) or as a **Web Service**:

| Field | 🌟 Static Site (Recommended) | ⚙️ Web Service (Node / Python Server) |
| :--- | :--- | :--- |
| **Service Type** | `Static Site` | `Web Service` |
| **Root Directory** | `.` *(or leave blank)* | `.` *(or leave blank)* |
| **Build Command** | *(leave empty)* | `npm install -g serve` *(or leave blank)* |
| **Start Command** | *(Not applicable / Not required)* | `npx -y serve -s . -l $PORT` *(or `python -m http.server $PORT`)* |
| **Publish / Output Directory** | `.` *(or root)* | *(Not applicable)* |
| **Environment Variables (Key & Value)** | None required | `PORT` = `10000` *(usually auto-detected by platform)* |

> [!TIP]
> **Why choose "Static Site"?**
> - **100% Free Forever:** No server run-time fees or compute limits.
> - **Instant Loading:** No sleep/spin-down delays (web services spin down after 15 minutes of inactivity on free tiers, causing 30–50s cold start lags).
> - **Worldwide Edge CDN:** Cached globally for maximum speed.

---

### 📋 Pre-Deployment Checklist

Before deploying live to the public:
- [ ] **Change the Dashboard Password:** Update `DASHBOARD_CONFIG.password` in [`script.js`](script.js) from the default to your private password.
- [ ] **Verify Contact Form:** Ensure `697harrish@gmail.com` is configured or set up your EmailJS keys if desired.
- [ ] **Replace Resume & Photo:** Ensure [`resume.pdf`](resume.pdf) and [`profile.jpg`](profile.jpg) contain your current files.
- [ ] **Test External Links:** Verify your LinkedIn and GitHub URLs in [`data.json`](data.json) and [`index.html`](index.html).

---

## ⚙️ Configuration & Customization

### 1. Dashboard Password
The dashboard is password-protected to safeguard task lists and live editing features.
To change the default password:
- Open [`script.js`](script.js) and update the `password` field in `DASHBOARD_CONFIG`:
```javascript
const DASHBOARD_CONFIG = {
  password: 'YOUR_CUSTOM_PASSWORD',
  sessionKey: 'hrsPortfolioDash',
  sessionDuration: 8 * 60 * 60 * 1000 // 8 hours
};
```
Alternatively, log in to the dashboard via the UI and use the **Dashboard Settings → Update Password** form.

### 2. Contact Form & Email Delivery
By default, the contact form utilizes FormSubmit for zero-configuration delivery to `697harrish@gmail.com`. If you wish to use **EmailJS**:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. In [`script.js`](script.js), populate `EMAILJS_CONFIG`:
```javascript
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  configured: true
};
```

### 3. Personal Data & Resume
- **Profile Data**: Edit values in [`data.json`](data.json) or update directly from the in-browser dashboard.
- **Resume**: Replace [`resume.pdf`](resume.pdf) in the project root with your updated resume while keeping the same filename.
- **Profile Picture**: Replace [`profile.jpg`](profile.jpg) with your preferred photo.

---

## 🌐 Connect with Harrish

- **Email:** [697harrish@gmail.com](mailto:697harrish@gmail.com)
- **LinkedIn:** [Harrish R S](https://www.linkedin.com/in/harrish-r-s-256a1237a/)
- **GitHub:** [@harrish-rs-tech](https://github.com/harrish-rs-tech)
- **Talentely:** [Harrish R S Profile](https://lms.talentely.com/in/d42d7c4c-1eb4-421d-bc47-047663ab91ff)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it as inspiration for your own portfolio!
