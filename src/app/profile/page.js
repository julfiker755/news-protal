import PlanLayout from '@/components/master/Plan-layout';
import ProfileFrom from '@/components/user/ProfileFrom';
import { cookies } from 'next/headers';


async function getData(cookies) {
    let option={method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'}
    let profile = (await (await fetch(`${process.env.HOST}/api/user/profile/details`,option)).json())['data'];
    return { profile: profile };
}



const page = async() => {
    const cookieStore = cookies()
    let data=await getData(cookieStore);

    return (
        <PlanLayout>
             <ProfileFrom profile={data["profile"]}></ProfileFrom>
        </PlanLayout>
    );
};

export default page;