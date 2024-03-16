"use client"
import { useState } from 'react';
import SubmitButton from '../master/SubmitButton';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegisterFrom = () => {
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [email,setemail]=useState("")
    const [mobile,setmobile]=useState("")
    const [password,setpassword]=useState("")
    const [submit,setsubmit]=useState(false)
    const router=useRouter()
    
     // handlefrom
   const hanldefrom=async(e)=>{
    e.preventDefault()
    if(firstName.length === 0){
       return toast.error("firstName not found")
    }else if(lastName.length === 0){
       return toast.error("lastName not found")
    }else if(mobile.length === 0){
        return toast.error("mobile not found")
     }else if(email.length === 0){
        return toast.error("mobile not found")
     }else if(password.length === 0){
        return toast.error("password not found")
     }else if(email.length > 0 && password.length > 0){
      const register={firstName,lastName,email,mobile,password}
      setsubmit(true)
     const {data}=await axios.post(`/api/user/Register`,register)
     data.status === "success" ?  router.push("/user/login") : toast.error("Register error,try again")
     setsubmit(false)
     

    }
}
    
    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                <form onSubmit={hanldefrom}>
                <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                    <div className="row ">
                        <h5 className="mb-1 mx-0 px-0">User Registration</h5>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">First Name</label>
                            <input value={firstName} onChange={(e)=>setfirstName(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Last Name</label>
                            <input value={lastName} onChange={(e)=>setlastName(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Mobile</label>
                            <input value={mobile} onChange={(e)=>setmobile(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Email</label>
                            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" />
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Password</label>
                            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <SubmitButton className="btn btn-danger w-100 mt-3" submit={submit}  text="Sign
        Up"/>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterFrom;