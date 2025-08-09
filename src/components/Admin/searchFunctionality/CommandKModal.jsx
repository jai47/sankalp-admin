'use client';
// components/CommandKModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CommandKModal({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const backdropRef = useRef(null);
    const inputRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                backdropRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -20, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                }
            );

            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else {
            gsap.to(backdropRef.current, {
                opacity: 0,
                duration: 0.2,
                ease: 'power2.in',
            });
            gsap.to(modalRef.current, {
                opacity: 0,
                y: -20,
                scale: 0.95,
                duration: 0.2,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={backdropRef}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="mt-24 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-2xl p-4 w-full max-w-xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    ref={inputRef}
                    type="text"
                    className="w-full px-4 py-2 text-lg rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                    <ul className="mt-4 space-y-2">
                        <li className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                            Result 1 for "{search}"
                        </li>
                        <li className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
                            Result 2 for "{search}"
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
