import PlanLayout from '@/components/master/Plan-layout';
import EmailvarifyFrom from '@/components/user/EmailvarifyFrom';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import React from 'react';

const Emailvarify = () => {
    const cookiestore=cookies()
    const token=cookiestore.get("token")
    if(typeof token !== 'undefined'){
         redirect("/")
    }
    
    return (
       <PlanLayout>
            <EmailvarifyFrom></EmailvarifyFrom>
       </PlanLayout>
    );
};

export default Emailvarify;