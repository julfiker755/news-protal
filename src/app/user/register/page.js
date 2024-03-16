import PlanLayout from '@/components/master/Plan-layout';
import RegisterFrom from '@/components/user/RegisterFrom';
import React from 'react';

const page = () => {
    return (
        <PlanLayout>
             <RegisterFrom></RegisterFrom>
        </PlanLayout>
    );
};

export default page;