'use client';
// components/CommandKHandler.tsx
import { useEffect, useState } from 'react';
import CommandKModal from './CommandKModal';

export default function CommandKHandler() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

            const cmdOrAltPressed = isMac ? e.metaKey : e.altKey;
            const kPressed = e.key.toLowerCase() === 'k';
            const escPressed = e.key === 'Escape';

            if (cmdOrAltPressed && kPressed) {
                e.preventDefault(); // Prevent browser behavior
                setIsOpen(true);
            }

            if (escPressed) {
                e.preventDefault(); // Prevent browser behavior
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <CommandKModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
