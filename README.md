# 🌐 Harrish R S — AI & Data Science Portfolio

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Status](https://img.shields.io/badge/Status-Open%20to%20Internships-00d4aa?style=flat)](mailto:697harrish@gmail.com)

**Personal Developer Portfolio & Interactive Activity Dashboard**

[Overview](#-overview) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [File Structure](#-file-structure) • [Getting Started](#-getting-started) • [Configuration](#-configuration) • [Connect](#-connect)

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
