import connectDB from '@/lib/db';
import comparePassword from '@/utils/bcrypt/comparePassword';
const { userModel } = require('@/models/userModel');

export async function loginUserWithCredentials(email, password) {
    try {
        // Connect to the database
        await connectDB();

        // Fetch user by email
        const user = await userModel.findOne({ email }).select('-__v'); // Exclude version field

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        // Verify password
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return { success: false, message: 'Invalid password' };
        }

        return { success: true, user };
    } catch (error) {
        console.error('Error logging in user:', error);
        return { success: false, message: 'Error logging in user' };
    }
}
