import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        institute: {
            type: String,
            required: true,
        },
        orderID: {
            type: String,
            required: true,
        },
        paymentID: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending',
        },
    },
    { timestamps: true }
);

export const orderModel =
    mongoose.models.Order || mongoose.model('Order', orderSchema);
