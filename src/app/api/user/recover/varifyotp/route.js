import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


// post mathod
export async function POST(req,res){
    try{
        let reqbody=await req.json()
        const prisma=new PrismaClient()
        const count=await prisma.users.count({where:reqbody})
        if(!count){
            return NextResponse.json({status:'success',data:'OTP is not valid'})
        }else{
            return NextResponse.json({status:'success',data:'Vaild OTP Code'})
        }

    }catch(err){
        return NextResponse.json({status:'fail',message:err.toString()})
    }
}