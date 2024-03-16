"use client"
import React, { useState } from 'react';
import SubmitButton from '../master/SubmitButton';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const PinvarifyFrom = () => {
    const [submit,setsubmit]=useState(false)
    const [otp,setotp]=useState("")
    const router=useRouter()
    // handle form
    const handlefrom=async(e)=>{
        e.preventDefault()
        
        if(otp.length === 0){
            return toast.error("otp not found")
         }else if(otp.length > 0){
            setsubmit(true)
            const otpvarify={email:localStorage.getItem("email"),otp}
           

            const {data}=await axios.post(`/api/user/recover/varifyotp`, otpvarify)
             if(data.status === "success"){
                 localStorage.setItem("otp",otp)
                 router.push("/user/resetpassword")
             }
            
            setsubmit(false)
         }
    }
    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
                <form onSubmit={handlefrom} className="card animated fadeIn p-5 gradient-bg">
                    <h5 className="mb-3">Verification PIN</h5>
                    <label className="form-label">6 Digit Code</label>
                    <input onChange={(e)=>setotp(e.target.value)} value={otp} type="text" className="form-control mb-2" />
                     <h6 className='text-warning'>6 Digit OTP Code has been sent to your email</h6>
                    <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Verify" />
                </form>
            </div>
        </div>

    );
};

export default PinvarifyFrom;