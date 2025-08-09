'use client';
import React, { useEffect } from 'react';

const Page = () => {
    const loadScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript().then((loaded) => {
            if (loaded) {
                console.log('Razorpay script loaded successfully');
            } else {
                console.error('Failed to load Razorpay script');
            }
        });
    }, []);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                fetch('/api/order/create/', {
                    method: 'POST',
                    body: JSON.stringify({
                        planId: '688fb6f1caf8f4aeb814cf5a',
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        const options = {
                            key: 'rzp_test_bUZ8nE5jfOEHxE', // Replace with your key
                            subscription_id: data.subscriptionId,
                            name: 'SHRK',
                            description: 'Subscription Payment',
                            handler: function (response) {
                                fetch('/api/order/verify/', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(response),
                                });
                            },
                            prefill: {
                                name: 'Customer Name',
                                email: 'customer@example.com',
                                contact: '9999999999',
                            },
                            theme: {
                                color: '#3399cc',
                            },
                        };

                        const rzp = new window.Razorpay(options);
                        rzp.open();
                    });
            }}
        >
            Click me
        </button>
    );
};

export default Page;
