https://userdetailmanagement.netlify.app/


http://localhost:3001/users

## 🔧 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-github-repo-url>
cd <project-folder>
npm run dev

# Run JSON server
npx json-server --watch db.json --port 3001


# React User Management (CRUD) Application

This project is a simple React-based CRUD (Create, Read, Update, Delete) web application for managing user data.  
It is built with **extensibility** in mind, allowing new form fields to be added with minimal code changes using a **schema-driven approach**.

---

## 🚀 Features

- Create, Read, Update, Delete users
- Schema-based dynamic form rendering
- Input validation (required fields, patterns, length checks)
- Clean and user-friendly UI
- Mock REST API using JSON Server
- TypeScript for type safety
- Easily extensible architecture

http://localhost:3001/users

---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Axios**
- **JSON Server** (mock API)
- **Plain CSS** (responsive & clean UI)

---

## 📋 User Fields

The application currently supports the following fields:

- First Name (required, minimum length validation)
- Last Name (required)
- Phone Number (required, exactly 10 digits)
- Email Address (required, valid email format)








