import React, { useState } from 'react';

const CreatePlans = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        planName: '',
        price: '',
        interval: 'monthly',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Plan Data:', formData);
        // TODO: send to backend API
        setIsOpen(false);
    };

    return (
        <>
            {/* Button to open panel */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                + Create Plan
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Right-side panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b p-4">
                    <h2 className="text-lg font-semibold">Create New Plan</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {/* Plan Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Plan Name
                        </label>
                        <input
                            type="text"
                            name="planName"
                            value={formData.planName}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Price (₹)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Interval */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Interval
                        </label>
                        <select
                            name="interval"
                            value={formData.interval}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                        >
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Create Plan
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreatePlans;
