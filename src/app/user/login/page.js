import PlanLayout from '@/components/master/Plan-layout';
import LoginFrom from '@/components/user/LoginFrom';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';


const page = () => {
    const cookiestore=cookies()
    const token=cookiestore.get("token")
    if(typeof token !== 'undefined'){
         redirect("/")
    }
    
    return (
        <PlanLayout>
             <LoginFrom></LoginFrom>
        </PlanLayout>
    );
};

export default page;