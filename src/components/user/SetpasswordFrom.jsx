"use client"
import React, { useState } from 'react';
import SubmitButton from '../master/SubmitButton';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SetpasswordFrom = () => {
    const [submit,setsubmit]=useState(false)
    const [password,setpassword]=useState("")
    const router=useRouter()
    // handle form
    const handlefrom=async(e)=>{
        e.preventDefault()
        
        if(password.length === 0){
            return toast.error("password not found")
         }else if(password.length > 0){
            setsubmit(true)
            const newpassword={email:localStorage.getItem("email"),otp:localStorage.getItem("otp"),password}
        
            const {data}=await axios.post(`/api/user/recover/resetpassword`, newpassword)
             if(data.status === "success"){
                 localStorage.removeItem("email")
                 localStorage.removeItem("otp")
                 router.push("/user/login")
             }
            
            setsubmit(false)
         }
    }
    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
                <form onSubmit={handlefrom} className="card animated fadeIn p-5 gradient-bg">
                    <h5 className="mb-3">New Password</h5>
                    <input onChange={(e)=>setpassword(e.target.value)} value={password} type="text" className="form-control mb-2" />
                    <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Chanage" />
                </form>
            </div>
        </div>

    );
};


export default SetpasswordFrom;