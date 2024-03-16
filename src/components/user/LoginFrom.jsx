"use client"
import React, { useState } from 'react';
import SubmitButton from '../master/SubmitButton';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const LoginFrom = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [submit,setsubmit]=useState(false)
    const router=useRouter()

    // handlefrom
   const hanldefrom=async(e)=>{
     e.preventDefault()
     if(email.length === 0){
        return toast.error("Email not found")
     }else if(password.length === 0){
        return toast.error("Password not found")
     }else if(email.length > 0 && password.length > 0){
    setsubmit(true)
      const {data}=await axios.post(`/api/user/login`,{email,password})
      data.Status === "success" ? toast.success("Login Successfull") && router.push("/") : toast.error("User Not Found")
      setemail("")
      setpassword("")
     }
     setsubmit(false)
   }



    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
                <form onSubmit={hanldefrom} className="card animated fadeIn p-5 gradient-bg">
                    <h5 className="mb-3">User Login</h5>
                    <label className="form-label">User Email</label>
                    <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control mb-2" />
                    <label className="form-label">User Password</label>
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control mb-1" />
                    <SubmitButton  className="btn btn-danger mt-3" submit={submit} text="Login" />

                    {/* others featueres */}
                    <div className="my-3 d-flex">
                        <Link href="/user/register" className="nav-link mx-2">Sign Up |</Link>
                        <Link href="/user/emailvarify" className="nav-link">Forget Password</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginFrom;