'use client';
import React, { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        fetch('/api/institute/fetch')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    });
    return <div>Page</div>;
};

export default Page;
