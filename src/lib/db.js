import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('⚠️ MONGO_URI is missing in .env.local');
}

let isConnected = false; // Track the connection status

const connectDB = async () => {
    if (isConnected) {
        console.log('✅ MongoDB is already connected');
        return;
    }

    try {
        const connection = await mongoose.connect(MONGODB_URI);
        isConnected = connection.connections[0].readyState === 1; // Check if the connection is open
        if (!isConnected) {
            throw new Error('⚠️ MongoDB connection failed');
        }
        mongoose.set('strictQuery', true); // Set strictQuery to true
        mongoose.connection.on('connected', () => {
            console.log('✅ MongoDB connected successfully');
        });
    } catch (error) {
        console.error('⚠️ MongoDB connection error:', error);
    }
};

export default connectDB;
