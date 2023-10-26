import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import  { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var CryptoJS = require("crypto-js");
const signup = () => {
  const router=useRouter()
   const [name, setname] = useState("")
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
  

   useEffect(() => {
    if(localStorage.getItem('token'))
    {
      router.push('/')
    }
  }, [])
  
    const handleChange=(e)=>{
      if(e.target.name=='name'){ setname(e.target.value)}
      else if(e.target.name=='email'){setemail(e.target.value)}
      else if(e.target.name=='password'){setpassword(e.target.value)}
    }
    const  handleSubmit =async (e)  =>{
      e.preventDefault();
      const data={name,email,password}
  
        try {
          const response = await fetch("http://localhost:3000/api/signup", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          if(result.success)
          {
            console.log("Success:", result);
            toast.success('Successfully Registered!', {
              position: "bottom-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
          else{
            toast.error(' User Already existed', {
              position: "bottom-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
         
        } catch (error) {
          console.error("Error:", error);
         
        }
      
      setname("");
      setemail("");
      setpassword("");
    }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="images/logo.webp" alt="Your Company"/>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
    </div>
  
      <ToastContainer
      position="bottom-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
/>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6"  method="POST">
      <div>
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input value={name} onChange={handleChange} id="name" name="name" type="text" autocomplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input value={email} onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        
          </div>
          <div className="mt-2">
            <input value={password} onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign up</button>
        </div>
      </form>
  
      <p className="mt-10 text-center text-sm text-gray-500">
       Already have an Account?
        <Link href={"/login"} className='font-semibold leading-6 text-pink-600 hover:text-pink-500'> Login</Link>
      </p>
    </div>
  </div>
  )
}

export default signup
