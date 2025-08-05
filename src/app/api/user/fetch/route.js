import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/db';
import { userModel } from '@/models/userModel';

export const GET = auth(async function GET(req) {
    if (!req.auth || !req.auth.user?.email) {
        return NextResponse.json(
            { message: 'Not authenticated' },
            { status: 401 }
        );
    }

    try {
        await connectDB();

        const existingUser = await userModel.findOne({
            email: req.auth.user.email,
        });

        if (!existingUser) {
            return NextResponse.json({
                success: false,
                message: 'User not found',
            });
        }

        return NextResponse.json({
            success: true,
            message: 'Fetched user successfully',
            user: existingUser,
        });
    } catch (e) {
        throw new Error(e);
    }
});
