# Auth Task Manager (Frontend + Backend)

The project demonstrates secure authentication, protected routes, and a CRUD‑enabled dashboard, following real‑world, scalable architecture.

### Live url:   https://authentication-dashboard-iota.vercel.app/

## Live Features

### Authentication

User Register / Login / Logout

JWT‑based authentication stored in HTTP‑only cookies

Session persistence across page refresh

Protected routes (Dashboard accessible only when logged in)

### Dashboard

Display logged‑in user profile

Create, Read, Update, Delete (CRUD) tasks

Toggle task status (Pending ↔ Completed)

Filter tasks by status

Clean, modern  UI

### Security

Password hashing using bcrypt

JWT validation middleware

Cookies protected from XSS (httpOnly)

Centralized error handling

## Tech Stack

 ### Frontend

React.js (Vite)

Tailwind CSS

### Backend

Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken)

bcryptjs

## 1.Backend Setup

cd backend

npm install

Create .env file:

PORT=5000

MONGO_URI=mongodb://localhost:27017/taskmanager

JWT_SECRET=your_secret_key

 run server using -> npm run dev

 ## 2.Frontend Setup
 cd frontend
 
npm install

npm run dev

## Authentication Flow (Cookie‑Based)

1.User logs in

2.Backend generates JWT

3.JWT stored in HTTP‑only cookie

4.Backend validates cookie & returns user data

5.Auth state is restored automatically

## API Endpoints

Auth

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

POST /api/auth/logout

Tasks

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id
