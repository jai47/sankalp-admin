import connectDB from '@/lib/db';
import { getRazorpayInstance } from '@/lib/razorpay';
import { planModel } from '@/models/planModel';
import { NextResponse } from 'next/server';

const { auth } = require('@/auth');

export const POST = auth(async (req) => {
    if (!req.auth) {
        return NextResponse.error({
            status: 401,
            statusText: 'Not authenticated',
        });
    }

    //check for request contain plan ID
    const { planId } = await req.json();

    //if not return error
    if (!planId) {
        return NextResponse.json(
            { message: 'Plan ID is required' },
            { status: 400 }
        );
    }

    //fetch plan from the database
    await connectDB();
    const plan = await planModel.findById(planId);

    //if plan not found return error
    if (!plan) {
        return NextResponse.json(
            { message: 'Plan not found' },
            { status: 404 }
        );
    }

    try {
        const razorpayInstance = getRazorpayInstance();
        const subscription = await razorpayInstance.subscriptions.create({
            plan_id: plan.plan_id,
            total_count: 1,
            customer_notify: 1,
        });
        console.log('Subscription created:', subscription.id);
        return NextResponse.json(
            {
                success: true,
                message: 'Order created successfully',
                subscriptionId: subscription.id,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Error creating order', error: error.message },
            { status: 500 }
        );
    }
});
