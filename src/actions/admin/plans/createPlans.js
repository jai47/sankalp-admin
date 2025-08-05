const { planModel } = require('@/models/planModel');

export const createPlan = async (planData) => {
    try {
        const { plan_id, name, amount, features, duration } = planData;

        if (!name || !amount || !features || !duration) {
            throw new Error('All fields are required');
        }

        const newPlan = new planModel({
            plan_id,
            name,
            amount,
            features,
            duration,
        });
        await newPlan.save();
        return newPlan;
    } catch (error) {
        throw new Error('Error creating plan');
    }
};
