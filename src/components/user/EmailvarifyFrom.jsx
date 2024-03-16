"use client"
import { useState } from 'react';
import SubmitButton from '../master/SubmitButton';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const EmailvarifyFrom = () => {
    const [submit,setsubmit]=useState(false)
    const [email,setemail]=useState("")
    const router=useRouter()

    // proteded route
   

    const handlefrom=async(e)=>{
        e.preventDefault()
        if(email.length === 0){
            return toast.error("Email not found")
         }else if(email.length > 0){
            setsubmit(true)
            const {data}=await axios.get(`/api/user/recover/varifyemail?email=${email}`)
             if(data.status=== "success"){
                 localStorage.setItem("email",email)
                 router.push("/user/otpvarify")
             }
            setemail("")
            setsubmit(false)
         }
    }

    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
                <form onSubmit={handlefrom} className="card animated fadeIn p-5 gradient-bg">
                    <h5 className="mb-3">Email Address</h5>
                    <label className="form-label">User Email</label>
                    <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control mb-2" />
                    <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Next" />
                </form>
            </div>
        </div>
    );
};

export default EmailvarifyFrom;