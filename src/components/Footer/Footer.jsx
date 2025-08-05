import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#facc15] px-10 py-16 text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                    {/* Logo and Slogan */}
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                        <p className="mt-2 font-medium">SHRK.</p>
                        <p className="mt-1 text-xs font-light">
                            Communicate. Collaborate. Create.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <p>500 Terry Francine Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p className="mt-3">General Inquiries: 123-456-7890</p>
                        <p>Sales: info@mysite.com</p>
                        <p>Customer Care: info@mysite.com</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="underline">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="underline">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow / Form Section */}
                    <div>
                        <h3 className="font-semibold mb-3">Follow</h3>
                        <p className="mb-2 text-xs">
                            Sign up to get the latest news on our product.
                        </p>
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full border border-black p-2 mb-2 text-sm"
                        />
                        <label className="flex items-center text-xs mb-2">
                            <input type="checkbox" className="mr-2" />
                            Yes, subscribe me to your newsletter. *
                        </label>
                        <button className="bg-black text-white px-4 py-2 text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="max-w-7xl mx-auto mt-10 text-sm font-medium grid grid-cols-1 md:grid-cols-4">
                    <div className="flex gap-2 md:items-end mt-6 md:mt-0">
                        <a href="#" className="hover:underline">
                            LinkedIn
                        </a>
                        <a href="#" className="hover:underline">
                            YouTube
                        </a>
                        <a href="#" className="hover:underline">
                            Facebook
                        </a>
                    </div>
                </div>
            </footer>

            <div className="h-10 w-full flex items-center justify-center text-xs font-light bg-black text-white">
                Copyright © 2025 SHRK | All Rights Reserved
            </div>
        </>
    );
};

export default Footer;
