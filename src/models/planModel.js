import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    plan_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});

export const planModel =
    mongoose.models.Plan || mongoose.model('Plan', planSchema);
