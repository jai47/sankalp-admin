import { instituteModel } from '@/models/instituteModel';
import { NextResponse } from 'next/server';

const { auth } = require('@/auth');

export const POST = auth(async function POST(req) {
    if (!req.auth || !req.auth.user?.email) {
        return NextResponse.json(
            { message: 'Not authenticated' },
            { status: 401 }
        );
    }
    // create a new institute data
    try {
        const instituteData = await req.json();

        if (!instituteData.instituteName || !instituteData.address) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Institute name and address are required',
                },
                { status: 400 }
            );
        }

        const existingInstitute = await instituteModel.findOne({
            instituteName: instituteData.instituteName,
        });

        if (existingInstitute) {
            return NextResponse.json(
                {
                    success: true,
                    message: 'Institute already exists',
                },
                { status: 400 }
            );
        }

        await instituteModel.create(instituteData);

        return NextResponse.json(
            {
                success: true,
                message: 'Institute created successfully',
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating institute:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error creating institute',
                error: error.message,
            },
            { status: 500 }
        );
    }
});
