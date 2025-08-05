import { createPlan } from '@/actions/admin/plans/createPlans';
import { userModel } from '@/models/userModel';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { auth } from '@/auth';

export const POST = auth(async (req) => {
    if (!req?.auth) {
        return NextResponse.error({
            status: 401,
            statusText: 'Not authenticated',
        });
    }

    await connectDB();
    const user = await userModel.findOne({ email: req.auth.user.email });

    if (user?.role !== 'admin') {
        return NextResponse.error({
            status: 403,
            statusText: 'Forbidden',
        });
    }

    const { plan_id, name, amount, duration, features } = await req.json();

    try {
        await createPlan({
            plan_id,
            name,
            amount: parseInt(amount),
            duration,
            features,
        });

        return NextResponse.json(
            { message: 'Plan created successfully', success: true },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: error, success: false },
            { status: 500 }
        );
    }
});
