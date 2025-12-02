import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-blue-50 p-6 rounded-full mb-8 animate-bounce">
                <AlertCircle className="w-16 h-16 text-primary" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>

            <p className="text-gray-600 max-w-md mb-10 text-lg">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
}
