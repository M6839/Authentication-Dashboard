import React from 'react'
import { useAuth } from '../context/AuthContext'
const Home = () => {
    const {user}=useAuth();
  return (
    <div className="">
         <main className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-blue-600">👋 Hello {user?`${user.name}`:'Developer'}</h1>
          <p className="mt-4 text-gray-700 text-center">welcome to the Authentication-Dashboard application 🎉</p>
        </main>
        </div>
  )
}

export default Home