"use client"
import { useEffect, useState } from 'react';
import SubmitButton from '../master/SubmitButton';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ProfileFrom = ({profile}) => {
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [email,setemail]=useState("")
    const [mobile,setmobile]=useState("")
    const [submit,setsubmit]=useState(false)
    const router=useRouter()

    // Profile update
     useEffect(()=>{
        setfirstName(profile?.firstName)
        setlastName(profile?.lastName)
        setemail(profile?.email)
        setmobile(profile?.mobile)
     },[profile])


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
     }else if(email.length > 0){
      const register={firstName,lastName,email,mobile}
      setsubmit(true)
     const {data}=await axios.post(`/api/user/profile/detailsupdate`,register)
     data.status === "success" ?  toast.success("Profile Update success") && router.refresh() : toast.error("Profile Not update,try again")
     setsubmit(false)
     

    }
}
    
    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                <form onSubmit={hanldefrom}>
                <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                    <div className="row ">
                        <h5 className="mb-1 mx-0 px-0">Update Profile</h5>
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
                            <input disabled value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <SubmitButton className="btn btn-danger w-100 mt-3" submit={submit}  text="Save"/>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileFrom;