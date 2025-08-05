import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/db';
import { userModel } from '@/models/userModel';

export const POST = auth(async function POST(req) {
    if (!req.auth || !req.auth.user?.email) {
        return NextResponse.json(
            { message: 'Not authenticated' },
            { status: 401 }
        );
    }

    try {
        const readers = await req.json();

        if (!readers.email) {
            return NextResponse.json(
                { message: 'Email is required' },
                { status: 400 }
            );
        }

        if (readers.email !== req.auth.user.email) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Email is not same as the current session',
                },
                { status: 400 }
            );
        }

        await connectDB();

        const existingUseruser = await userModel.findOneAndUpdate(
            { email: req.auth.user.email.toLowerCase() },
            {
                ...readers,
            },
            { new: true }
        );

        if (!existingUseruser) {
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'User fetched successfully',
            user: existingUseruser,
        });
    } catch (e) {
        throw new Error(e);
    }
});
