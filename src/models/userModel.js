import { generateName } from '@/utils/nameGenerator/generateName';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: generateName,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        default: Date.now,
    },
    password: {
        type: String,
        default: Math.random().toString(36).slice(2, 10), // Default password if not set
    },
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
    setup: {
        type: Boolean,
        default: false, // Indicates if the user has completed setup
    },
    provider: {
        type: String,
        enum: ['Google', 'Github', 'Credentials'],
        default: 'Credentials',
    },
});

export const userModel =
    mongoose.models.User || mongoose.model('User', userSchema);
