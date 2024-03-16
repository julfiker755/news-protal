import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import { headers } from "next/headers";

export async function POST(req,res){
    try {
        const reqbody=await req.json()
        const headerslist=headers()
       const id=parseInt(headerslist.get('id'))
       const prisma=new PrismaClient()

       const result=await prisma.users.update({
        where:{id:id},
        data:reqbody
     })
       return NextResponse.json({status:"success",data:result})
       
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
