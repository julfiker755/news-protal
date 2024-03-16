"use client"
import { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import toast from "react-hot-toast";
import axios from "axios";

const Subscribe = () => {
    const [email,setemail]=useState('')
    const [submit,setsubmit]=useState(false)

    const handlesubmit=async()=>{
        if(email.length === 0){
            return toast.error("Email not found")
        }
        setsubmit(true)
        const res=await axios.post("/api/subscribe",{email})
        setsubmit(false)
        setemail("")
        res?.data?.status === "success" ? toast.success("Subseribe successfull") : toast.error("Email Alreay use")

    }

    return (
        <div className="card p-3 shadow-sm">
            <span className="f-52 text-center text-muted"> <i className="bi bi-envelope"></i></span>
            <h6 className="text-center mb-3 mt-0">News Letter</h6>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Email Address" className="form-control mb3" />
            <SubmitButton onClick={handlesubmit} className="btn btn-danger mt-2 w-100" submit={submit} text="Submit" />
        </div>
    );
};

export default Subscribe;