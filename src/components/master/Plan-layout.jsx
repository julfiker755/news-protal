import React from 'react';
import Appnavber from './Appnavber';
import Footer from './Footer';
import { cookies } from 'next/headers';




async function getdata(){
    let social=(await (await fetch(`${process.env.HOST}/api/social`,{ cache: 'no-cache' })).json())['data']
    let categories=(await (await fetch(`${process.env.HOST}/api/categories`,{ cache: 'no-cache' })).json())['data']
    return {social,categories}
}

const PlanLayout = async(props) => {
    const data=await getdata()
    // cookie
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    let isLogin=!!token

   

     
    

    return (
        <>
           <Appnavber data={data} key={token}  isLogin={isLogin}></Appnavber> 
              {props.children}
           <Footer data={data}></Footer>
        </>
    );
};

export default PlanLayout;