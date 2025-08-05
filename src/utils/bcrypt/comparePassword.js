import bcrypt from 'bcrypt';

export const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Error comparing password:', error);
        throw new Error('Password comparison failed');
    }
};
export default comparePassword;
