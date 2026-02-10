import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useAuth } from '../context/AuthContext'
import axios from '../services/api'
const Login = () => {
    const navigate=useNavigate();
    const {setUser}=useAuth();
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const [errors,setErrors]=useState({})
    const [loading,setLoading]=useState(false)

const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.password) newErrors.password = "Password is required";

  setErrors(newErrors);
  if (Object.keys(newErrors).length !== 0) return;

  try {
    setLoading(true);

    const res = await axios.post('/auth/login', formData);

    toast.success("Login successful");

    setUser(res.data.user);

    navigate('/dashboard');
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className='min-h-screen flex  justify-center items-center'>
        <form onSubmit={handleSubmit} className='px-2 w-full md-px-0 md:w-[400px]'>
            <h1 className='text-blue-500 font-bold text-center text-[28px]'>Login</h1>
            <Input type='email' error={errors.email} name='email' value={formData.email}  placeholder='Enter email' className='' label='Email' onChange={(e)=>setFormData({...formData,email:e.target.value})} />
             <Input type='password'error={errors.password} name='password' value={formData.password} placeholder='Enter password' className='' label='password' onChange={(e)=>setFormData({...formData,password:e.target.value})} />
            <Button className=' text-[20px] w-full mt-2' disabled={loading}> {loading ? "Logging in..." : "Login"}</Button>
            <p>Don't have an account? <Link to='/register'><span className='text-blue-700'>Sign up</span></Link></p>
        </form>
    </div>
  )
}

export default Login