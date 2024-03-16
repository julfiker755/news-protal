import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"


export async function GET(req,res){
    try {
        const {searchParams}=new URL(req.url)
        const Postid=parseInt(searchParams.get("Postid"))

       const prisma=new PrismaClient()
       const result=await prisma.comments.findMany({where:{postID:Postid},
        include:{
            users:{select:{firstName:true,lastName:true}}
        }
    })
       return NextResponse.json({status:"success",data:result})
       
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}