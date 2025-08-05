import connectDB from '@/lib/db';
import { userModel } from '@/models/userModel';
import { hashAndSalt } from '@/utils/bcrypt/hashAndSalt';

export const createUser = async (userData) => {
    try {
        await connectDB();
        // Check if user already exists
        const existingUser = await userModel.findOne({ email: userData.email });
        if (existingUser) {
            return {
                success: false,
                message: 'User already exists',
                user: null,
            };
        }
        // Hash and salt the password
        const hashedPassword = await hashAndSalt(userData.password);
        if (!hashedPassword) {
            return { success: false, message: 'Password hashing failed' };
        }
        // Create new user
        const newUser = new userModel({
            ...userData,
            password: hashedPassword,
            provider: 'Credentials',
        });
        await newUser.save();

        return {
            success: true,
            message: 'User created',
            user: newUser,
        };
    } catch (error) {
        console.error('Error creating user:', error);
        return { success: false, message: 'Error creating user' };
    }
};

export const createUserWithProvider = async (userData) => {
    try {
        await connectDB();
        const existingUser = await userModel.findOne({ email: userData.email });

        if (existingUser) {
            return {
                success: false,
                user: existingUser,
                messgae: 'User Already Exist',
            };
        }

        const newUser = new userModel(userData);
        await newUser.save();

        return { success: true, user: newUser, message: 'New User Created' };
    } catch (error) {
        throw new Error(error);
    }
};
