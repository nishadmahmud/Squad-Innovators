import Image from 'next/image';
import { clientsData } from '@/lib/clientsData';

export const metadata = {
    title: "Our Clients",
    description: "Trusted by 500+ clients worldwide. See who we've worked with.",
};

export default function ClientsPage() {
    return (
        <div className="bg-white min-h-screen pt-30 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Trusted by <span className="text-gradient">500+ Clients</span>
                    </h1>
                    <p className="text-gray-600 max-w-4xl mx-auto text-lg">
                        We are proud to have partnered with these amazing companies to build digital solutions that drive growth.
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {clientsData.map((client) => (
                        <div
                            key={client.id}
                            className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
                        >
                            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-blue-50 transition-colors">
                                <Image
                                    src={client.logo}
                                    alt={client.title}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                                {client.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
