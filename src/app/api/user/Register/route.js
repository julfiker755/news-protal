import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

// post
export const POST=async(req,res)=>{
  try{
    let reqbody=await req.json()
    reqbody.otp="0"
    const prisma=new PrismaClient()
    const result=await prisma.users.create({
        data:reqbody
    })
   return NextResponse.json({status:"success",data:result})
  }catch(e){
    return NextResponse.json({status:'fail',message:e.toString()})
  }
}