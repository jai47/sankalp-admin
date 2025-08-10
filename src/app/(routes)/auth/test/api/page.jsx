'use client';
import { signIn, signOut } from 'next-auth/react';
import React, { useState } from 'react';

const ApiTester = () => {
    const [api, setApi] = useState('/api/user/fetch');
    const [method, setMethod] = useState('GET');
    const [formData, setFormData] = useState(
        JSON.stringify(
            {
                plan_id: 'premium',
                name: 'Premium Plan',
                amount: 999,
                duration: 'monthly',
                features: ['feature1', 'feature2'],
            },
            null,
            2
        )
    );
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            if (method !== 'GET') {
                options.body = formData;
            }

            const res = await fetch(api, options);

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(
                    errorData.message || `HTTP error! status: ${res.status}`
                );
            }

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const isValidJson = () => {
        if (method === 'GET') return true;
        try {
            JSON.parse(formData);
            return true;
        } catch (e) {
            return false;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 relative">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    API Tester
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow-md p-6 mb-6"
                >
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <select
                                value={method}
                                onChange={(e) => setMethod(e.target.value)}
                                className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            >
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                            </select>

                            <input
                                type="text"
                                value={api}
                                onChange={(e) => setApi(e.target.value)}
                                placeholder="Enter API URL"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />

                            <button
                                type="submit"
                                disabled={
                                    loading ||
                                    (method !== 'GET' && !isValidJson())
                                }
                                className={`px-6 py-2 rounded-md text-white font-medium ${
                                    loading ||
                                    (method !== 'GET' && !isValidJson())
                                        ? 'bg-blue-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                } transition`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send'
                                )}
                            </button>
                        </div>

                        {method !== 'GET' && (
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Request Body
                                </label>
                                <textarea
                                    value={formData}
                                    onChange={(e) =>
                                        setFormData(e.target.value)
                                    }
                                    className="h-56 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-mono text-sm"
                                    placeholder="Enter JSON request body"
                                />
                                {!isValidJson() && (
                                    <p className="text-red-500 text-sm mt-1">
                                        Invalid JSON format
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </form>

                {(response || error) && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Response
                        </h2>

                        {error ? (
                            <div className="p-4 bg-red-50 border-l-4 border-red-500">
                                <p className="text-red-700 font-medium">
                                    Error: {error}
                                </p>
                            </div>
                        ) : (
                            <div className="overflow-auto">
                                <pre className="p-4 bg-gray-50 rounded-md text-sm text-gray-800 font-mono">
                                    {JSON.stringify(response, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="absolute top-10 right-10 flex space-x-3">
                <button
                    onClick={() => signIn('google')}
                    className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                >
                    Login
                </button>
                <button
                    onClick={() => signOut()}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ApiTester;
