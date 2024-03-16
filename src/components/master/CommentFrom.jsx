import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CommentFrom = ({postID}) => {
    const [submit,setsubmit]=useState(false)
    const [message,setmessage]=useState("")
    const router=useRouter()
    //  handleform 
    const handleform=async(e)=>{
         e.preventDefault()
         if(message.length === 0){
            return ""
         }
        const {data}=await axios.post("/api/comments/manage",{postID:parseInt(postID),descriptions:message})
        if(data.status === "success"){
             router.refresh()
        }
       
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleform}>
                <div className="col-12 p-4">
                    <h5 className="mb-3">Write Yours</h5>
                    <textarea rows={6} onChange={(e)=>setmessage(e.target.value)} className="form-control mb-2" />
                    <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Submit" />
                </div>
                </form>
            </div>
        </div>

    );
};

export default CommentFrom;