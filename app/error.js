'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-red-50 p-6 rounded-full mb-8">
                <AlertTriangle className="w-16 h-16 text-red-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Something went wrong!</h1>

            <p className="text-gray-600 max-w-md mb-10 text-lg">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <RefreshCcw size={18} />
                    Try again
                </button>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                    <Home size={18} />
                    Go Home
                </Link>
            </div>
        </div>
    );
}
