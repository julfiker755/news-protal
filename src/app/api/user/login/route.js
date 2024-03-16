import { CreateToken } from "@/utility/jwtokenhelper"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"



// get data
export async function GET(req,res) {
  let expireDuration=new Date(Date.now() - 24*60*60*1000 );
  const response = NextResponse.redirect(new URL('/', req.url),303);
  response.cookies.set('token', '', { expires: expireDuration });
  return response;
}

// post
export const POST=async(req,res)=>{
  try{
    let reqbody=await req.json()
    const prisma=new PrismaClient()
    const result=await prisma.users.findUnique({where:reqbody})
    
    if(!result){
        return NextResponse.json({status:"fail",data:'User not found'})
    }else{
        const token=await CreateToken(result['email'],result['id'])
        const expireduration=new Date(Date.now()+24*60*60*1000)
        const cookieString=`token=${token};expires=${expireduration.toUTCString()};path=/`
        return NextResponse.json({Status:'success',data:token},{
            status:200,
            headers:{
                'Set-Cookie':cookieString,
            }
        })
    }

  }catch(e){
    return NextResponse.json({status:'fail',message:e.toString()})
  }
}