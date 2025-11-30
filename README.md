# Backend Mastery — Express + JavaScript + MongoDB/Mongoose

A fully structured backend starter project designed to help developers master Node.js backend development using **Express**, **JavaScript**, and **MongoDB/Mongoose**.  
This project demonstrates best practices for API structure, environment configuration, error handling, database modeling, and more.

---

## 🚀 Features

- **Express.js** server with clean folder structure
- **MongoDB** database integration using **Mongoose**
- **Environment variables** with `dotenv`
- **Modular routing** and **controller pattern**
- **Centralized error handling** and custom error classes
- **Async/await wrapper** to avoid repeated try/catch
- **Reusable utility functions**
- **Model validation** using Mongoose schemas
- **RESTful API architecture**

---

## 📁 Project Structure

```

Backend-Mastery/
├── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas or Local)
- Mongoose
- JavaScript (ES6+)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/backend-mastery.git
cd backend-mastery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create an `.env` file

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
```

### 4. Run the server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🧱 Example User Model

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
```

---

## 🛣️ Example Routes

```
GET    /api/users        → Get all users
POST   /api/users        → Create a user
GET    /api/users/:id    → Get user by ID
PUT    /api/users/:id    → Update user
DELETE /api/users/:id    → Delete user
```

---

## 🚨 Error Handling

This project includes:

- Global error middleware
- Custom error classes
- Async wrapper to avoid repetitive try/catch

Example async handler:

```javascript
module.exports = (fn) => (req, res, next) =>
	Promise.resolve(fn(req, res, next)).catch(next);
```

---

## 📦 Production Tips

Before deploying:

- Use environment variables
- Ensure MongoDB network rules allow access
- Consider using **PM2**, **Docker**, or a cloud service (Render, Railway, AWS, etc.)

---

## 📚 Learning Goals

This project helps you master:

- Scalable backend folder organization
- Clean Express route handlers
- MongoDB operations using Mongoose
- Middleware and utility creation
- Error-handling best practices
- REST API design concepts
- Environment variable management

---

## 📄 License

Licensed under the **MIT License**.
