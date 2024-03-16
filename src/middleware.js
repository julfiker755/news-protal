import { NextResponse } from "next/server";
import { Varifytoken } from "./utility/jwtokenhelper";

// This function can be marked `async` if using `await` inside
export async  function middleware(req,res){
  try{
  const token=req.cookies.get("token");
  const payload=await Varifytoken(token['value'])
  let reqHeaders=new Headers(req.headers)
  reqHeaders.set("email",payload['email'])
  reqHeaders.set("id",payload['id'])
  return NextResponse.next({request: {
    headers: reqHeaders,
  }})
  
  }catch (e) {
    if(req.nextUrl.pathname.startsWith("/api/")){
        return NextResponse.json({status:'fail',data:'Unauthorized'},{status:401});
    }
    else {
        return NextResponse.redirect(new URL('/user/login', req.url))
    }
}
}
 
export const config={
  matcher:[
      '/user',
      '/profile',
      '/comments',
      '/api/comments/manage',
      '/api/user/profile/details',
      '/api/user/profile/detailsupdate',
  ]
}
