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

ex: {  "name":"kiran",
    "email":"mkirankumar6839@gmail.com",
   "password":"kiran123"
}

POST /api/auth/login

ex: { 
    "email":"mkirankumar6839@gmail.com",
   "password":"kiran123"
}

GET /api/auth/me

ex: {
    "_id": "698b100d7138caf5b880c5f0",
    "name": "kiran",
    "email": "mkirankumar6839@gmail.com",
    "createdAt": "2026-02-10T11:01:33.549Z",
    "updatedAt": "2026-02-10T11:01:33.549Z",
    "__v": 0
}

POST /api/auth/logout

Tasks

GET /api/tasks

ex:  [
{
   "_id": "698b2edd2027552e98d8c665",
        "title": "Developing a website",
        "description": "developing a ecmorce website for auth",
        "status": "pending",
        "user": "698b100d7138caf5b880c5f0",
        "createdAt": "2026-02-10T13:13:01.051Z",
        "updatedAt": "2026-02-10T13:13:01.051Z",
        "__v": 0
    }
]


POST /api/tasks

ex:  {  
    "title":"Developing a website",
    "description":"developing a ecmorce website for auth"
}


PUT /api/tasks/:id



DELETE /api/tasks/:id
