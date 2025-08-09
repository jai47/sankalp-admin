'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

const sectionRender = ({ data }) => {
    const { section } = data;

    const sectionMap = {
        plans: <PlansSection data={data} />,
        dashboard: <DashboardSection data={data} />,
        payment: <Payment data={data} />,
    };

    return (
        <QueryClientProvider client={queryClient}>
            {sectionMap[section] || <div>Section not found</div>}
        </QueryClientProvider>
    );
};

export default sectionRender;
