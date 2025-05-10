# Quarto Website

A responsive and interactive front-end website for the **Quarto Game Project**, designed to support user interaction, bug reporting, and game promotion. Built using HTML, CSS, and JavaScript with a custom UI and mobile-friendly layout.

## 🌐 Live Preview

<img width="1665" alt="Screenshot 2025-05-10 at 2 50 28 PM" src="https://github.com/user-attachments/assets/7004dd7d-bd98-4d79-a0d1-401dcf332f07" />

<img width="1669" alt="Screenshot 2025-05-10 at 2 50 44 PM" src="https://github.com/user-attachments/assets/81f2a0c3-9350-4972-999e-b80cadd8cec0" />

## 📄 Pages Overview

- **Home Page** (`index.html`)  
  Introduces the game and provides navigation to game, statistics, and developer sections.

- **Login Page** (`login.html`)  
  Secure user login form with custom-styled password input using image overlays.

- **Signup Page** (`signup.html`)  
  User registration form styled for visual consistency and responsive layout.

- **Report a Bug** (`report.html`)  
  Submits a bug report via POST to a local server (`http://localhost:3000/report`). Form fields: summary, detailed description, optional email.

## ✨ Features

- 🔐 Custom login UI with animated password masking
- 🧾 Bug report submission form with success/fail feedback
- 📱 Mobile-first navigation with responsive burger menu
- 🎨 Modular CSS: `style.css`, `nav-bar.css`, `footer.css`, `report.css`, `loginSignin.css`
- 🧠 Functional JavaScript:
  - Form submission with `fetch()` and JSON handling
  - Interactive password visibility toggle
  - Dynamic ASCII image overlay in login form
  - Mobile menu toggle behavior

## 🗂️ Project Structure
quarto-website/
├── index.html

├── login.html

├── signup.html

├── report.html

├── css/

│   ├── style.css

│   ├── nav-bar.css

│   ├── footer.css

│   ├── report.css

│   └── loginSignin.css

├── media/

│   ├── burger.png

│   └── hero/

│       └── Piece1.png … Piece5.png

└── js/
