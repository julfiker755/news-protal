import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import { headers } from "next/headers";


// get comments
export async function GET(req,res){
    try {
        const headerslist=headers()
        const id=parseInt(headerslist.get('id'))

       const prisma=new PrismaClient()
       const result=await prisma.comments.findMany({
        where:{userID:id},
        include:{news_list:{select:{title:true}}}
    })
       return NextResponse.json({status:"success",data:result})
       
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}

// post 
export async function POST(req,res){
    try {
        const headerslist=headers()
        const id=parseInt(headerslist.get('id'))

        let jsondata=await req.json()
        jsondata.userID=id
       const prisma=new PrismaClient()
       const result=await prisma.comments.create({
        data:jsondata
       })

       return NextResponse.json({status:"success",data:result})
       
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}



// delete 
export async function DELETE(req,res){
    try {
        const headerslist=headers()
        const user_id=parseInt(headerslist.get('id'))

        const reqbody=await req.json()
        const reqid=parseInt(reqbody['id'])

       const prisma=new PrismaClient()
       const result=await prisma.comments.deleteMany({
        where:{
            AND:[
                {userID:user_id},
                {id:reqid}
            ]
        }
       })

       return NextResponse.json({status:"success",data:result})
       
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
