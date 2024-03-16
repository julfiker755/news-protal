import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        let reqbody=await req.json()
        const prisma=new PrismaClient()
        const count=await prisma.users.count({where:{email:reqbody['email'],otp:reqbody['otp']}})
        if(!count){
            return NextResponse.json({status:'success',data:'password not reset'})
        }else{
            await prisma.users.update({
               where:{email:reqbody['email']},
               data:{otp:"0",password:reqbody['password']}
            })
            return NextResponse.json({status:'success',data:'password reset suucessfull'})
        }

    }catch(err){
        return NextResponse.json({status:'fail',message:err.toString()})
    }
}