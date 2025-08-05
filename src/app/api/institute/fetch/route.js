import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/db';
import { instituteModel } from '@/models/instituteModel';

export const GET = auth(async function GET(req) {
    if (!req.auth || !req.auth.user?.email) {
        return NextResponse.json(
            { message: 'Not authenticated', success: false },
            { status: 401 }
        );
    }

    try {
        await connectDB();

        const existingInstitute = await instituteModel.findOne({
            userID: req.auth.user.email,
        });

        if (!existingInstitute) {
            return NextResponse.json({
                success: false,
                message: 'Institute not found',
            });
        }

        return NextResponse.json({
            success: true,
            message: 'Fetched institute successfully',
            institute: existingInstitute,
        });
    } catch (e) {
        throw new Error(e);
    }
});
