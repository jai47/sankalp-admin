import mongoose from 'mongoose';

const instituteSchema = new mongoose.Schema(
    {
        instituteName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        domain: {
            type: String,
            required: true,
        },
        subDomain: {
            type: String,
            required: true,
            unique: true,
        },
        logo: {
            type: String,
        },
        type: {
            type: String,
            enum: ['school', 'college', 'university', 'coaching'],
            required: true,
        },
        database: {
            type: String,
        },
        plan: {
            type: String,
            default: 'free', // Default plan
        },
        userID: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const instituteModel =
    mongoose.models.Institute || mongoose.model('Institute', instituteSchema);
