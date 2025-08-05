import { createUser } from '@/actions/user/createUser';
import connectDB from '@/lib/db';

const { NextResponse } = require('next/server');

async function POST(req, res) {
    const readers = await req.json();

    await connectDB();
    const user = await createUser(readers);
    return NextResponse.json({
        message: 'User created successfully',
        data: user,
    });
}

export { POST };
