import React from 'react';
import CreatePlans from './CreatePlans';

const AdminPlansSection = () => {
    // Fake billing data
    const fakeOrders = [
        {
            paymentID: 'pay_ABC123XYZ',
            orderID: 'order_RZP987654321',
            amount: 4999,
            email: 'john@example.com',
            institute: 'Greenwood High School',
            date: '2025-08-01',
            status: 'completed',
        },
        {
            paymentID: 'pay_DEF456UVW',
            orderID: 'order_RZP123456789',
            amount: 2999,
            email: 'sarah@example.com',
            institute: 'Sunrise College',
            date: '2025-08-03',
            status: 'pending',
        },
        {
            paymentID: 'pay_GHI789RST',
            orderID: 'order_RZP112233445',
            amount: 1999,
            email: 'mike@example.com',
            institute: 'City International School',
            date: '2025-08-05',
            status: 'failed',
        },
    ];

    return (
        <section className="h-full w-full bg-[#f5f5f5] border border-[#E1E0DC]">
            <div className="w-full h-[7%] border-b border-[#E1E0DC] flex items-center pl-4">
                <p className="text-2xl font-medium">
                    {/* {section?.toString()[0].toUpperCase() +
                        section?.toString().slice(1)} */}
                    Plans
                </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Billing</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Payment ID
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Razorpay Order ID
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Amount (₹)
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Email
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Institute
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Date
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {fakeOrders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 text-sm text-gray-800">
                                        {order.paymentID}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800">
                                        {order.orderID}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800">
                                        {order.amount}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800">
                                        {order.email}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800">
                                        {order.institute}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-800">
                                        {order.date}
                                    </td>
                                    <td
                                        className={`px-4 py-2 text-sm font-medium ${
                                            order.status === 'completed'
                                                ? 'text-green-600'
                                                : order.status === 'pending'
                                                ? 'text-yellow-600'
                                                : 'text-red-600'
                                        }`}
                                    >
                                        {order.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <CreatePlans />
        </section>
    );
};

export default AdminPlansSection;
