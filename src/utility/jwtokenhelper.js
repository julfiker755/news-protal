import { SignJWT, jwtVerify } from "jose"


// token create
export  async function CreateToken(email,id){
    const key=new TextEncoder().encode(process.env.JWT_SCREET)
    const paylod={email:email,id:id}
    let token=await new SignJWT(paylod)
         .setProtectedHeader({alg:'HS256'})
         .setIssuedAt()
         .setIssuer(process.env.JWT_ISSER)
         .setExpirationTime('24h')
         .sign(key)

    return token
  
}
// token varify
export async function Varifytoken(token){
    const key=new TextEncoder().encode(process.env.JWT_SCREET) 
    const decoded=await jwtVerify(token,key)
    return decoded['payload']
}

