import { orderModel } from '@/models/orderModel';
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { instituteModel } from '@/models/instituteModel';
const { auth } = require('@/auth');

export const POST = auth(async function POST(req) {
    if (!req.auth) {
        return NextResponse.error({
            status: 401,
            statusText: 'Not authenticated',
        });
    }

    const {
        razorpay_payment_id,
        razorpay_subscription_id,
        razorpay_signature,
    } = await req.json();

    if (
        !razorpay_payment_id ||
        !razorpay_subscription_id ||
        !razorpay_signature
    ) {
        return NextResponse.json(
            {
                message:
                    'Razorpay Payment ID, Subscription ID, and Signature are required',
            },
            { status: 400 }
        );
    }
    try {
        const secret = process.env.RAZORPAY_KEY_SECRET;

        // generate signature
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(razorpay_payment_id + '|' + razorpay_subscription_id)
            .digest('hex');

        // match signatures
        if (expectedSignature !== razorpay_signature) {
            console.error('Invalid signature');
            return NextResponse.json(
                { message: 'Failed to verify payment', success: false },
                { status: 400 }
            );
        }

        // const institute = await instituteModel.findOne({
        //     email: req.auth.user.email,
        // });

        const newOrder = new orderModel({
            email: req.auth.user.email,
            orderID: razorpay_subscription_id,
            paymentID: razorpay_payment_id,
            status: 'completed',
        });

        await newOrder.save();

        return NextResponse.json(
            { message: 'Payment verified successfully', success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error verifying payment:', error);
        return NextResponse.json(
            { message: 'Internal server error', success: false },
            { status: 500 }
        );
    }
});
