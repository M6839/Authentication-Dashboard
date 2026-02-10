import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from '../services/api'
const Signup = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",
        email:'',
        password:''
    })
    const [errors,setErrors]=useState({})
    const [loading,setLoading]=useState(false)

const handleSubmit = async (e) => {
  e.preventDefault();
  let newErrors = {};
   if (!formData.name) newErrors.name = "Name is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.password) newErrors.password = "Password is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      setLoading(true);
      const res = await axios.post(`/auth/register`,
        formData
      );
      setLoading(false);
      toast.success("Registration successful successful");
      console.log("Registration successful:", res.data);
      if(res.status==200 || res.status==201){
        navigate('/login')
      }
      else{
        toast.error("Registration failed")
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Rigistration failed");
      console.log(err.response?.data?.message);
    }
  }
    }

  return (
    <div className='min-h-screen flex  justify-center items-center'>
        <form onSubmit={handleSubmit} className='px-2 w-full md:px-0 md:w-[400px]'>
            <h1 className='text-blue-500 font-bold text-center text-[28px]'>Sign Up</h1>
            <Input type='name' error={errors.name} name='name' value={formData.name}  placeholder='Enter name' className='' label='Name' onChange={(e)=>setFormData({...formData,name:e.target.value})} />
            <Input type='email' error={errors.email} name='email' value={formData.email}  placeholder='Enter email' className='' label='Email' onChange={(e)=>setFormData({...formData,email:e.target.value})} />
             <Input type='password'error={errors.password} name='password' value={formData.password} placeholder='Enter password' className='' label='password' onChange={(e)=>setFormData({...formData,password:e.target.value})} />
             
                     <Button className=' text-[20px] w-full mt-2' disabled={loading}> {loading ? "Sign up..." : "Sign up"}</Button>
            <p>Already have an account? <Link to='/login'><span className='text-blue-700'>Sign in</span></Link></p>
        </form>
    </div>
  )
}

export default Signup