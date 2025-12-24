# Internal Management System (IMS)

A full-stack Internal Management System built to demonstrate real-world authentication, dashboard management, database integration, and cloud deployment.

## 🌐 Live Application

- **Frontend:** https://frontend-d5bv.onrender.com  
- **Backend:** https://backend-8mlh.onrender.com  

---

## 📌 Project Overview

The Internal Management System allows authenticated users to securely log in and access a manager dashboard displaying assigned tasks.  
This project focuses on clean architecture, authentication, environment security, and production deployment.

---

## ✨ Features

- JWT-based authentication (Login & Logout)
- Manager dashboard with assigned tasks
- Responsive UI using Tailwind CSS (CDN)
- REST APIs with Node.js and Express
- MongoDB Atlas cloud database
- Environment variable based configuration
- Deployed frontend and backend on Render
- Git & GitHub version control

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS (via CDN)
- Axios

### Backend
- Node.js
- Express.js	
- MongoDB (Mongoose)
- JSON Web Token (JWT)

### Deployment
- Render (Frontend + Backend)
- MongoDB Atlas

---

## 🔐 Demo Credentials

> Demo credentials are provided for evaluation purposes only.

Email : admin@example.com
password : 123456

---

## 🧪 How to Use

1. Open the frontend URL  
   https://frontend-d5bv.onrender.com
2. Login using the demo credentials
3. View the manager dashboard with assigned tasks
4. Logout securely

---

🌱 Database Seeding

cd backend
node seed.js

----
Backend
cd backend
npm install
npm run dev

---
frontend 

cd frontend
npm install
npm run dev


## 📁 Project Structure

ims/
│
├── backend/
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── auth.js
│ ├── seed.js
│ ├── server.js
│ ├── package.json
│ └── .env (ignored)
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ └── Navbar.jsx
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ └── Dashboard.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── vite.config.js
│ ├── package.json
│ └── .env (ignored)
│
└── README.md

