import PlanLayout from '@/components/master/Plan-layout';
import UserCommentsList from '@/components/master/UserCommentsList';
import { cookies } from 'next/headers';
import React from 'react';


async function getData(cookies) {
    let option={method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'}
    let Comments = (await (await fetch(`${process.env.HOST}/api/comments/manage`,option)).json())['data'];
    return { Comments: Comments };
}

const page = async() => {
    const cookieStore = cookies()
    let data=await getData(cookieStore);
   

    return (
        <PlanLayout>
              <UserCommentsList data={data['Comments']}/>
        </PlanLayout>
    );
};

export default page;