import Image from 'next/image';
import Link from 'next/link';
import { clientsData } from '@/lib/clientsData';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "Our Projects",
    description: "Explore our portfolio of successful projects and digital solutions.",
};

export default function ProjectsPage() {
    return (
        <div className="bg-white min-h-screen pt-30 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        Our Work
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Discover how we've helped businesses transform their digital presence with custom solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clientsData.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 w-full overflow-hidden bg-gray-50">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-50"
                                    >
                                        View Live
                                        <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="text-xs font-medium px-2 py-1 bg-blue-50 text-primary rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div> */}

                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors mt-auto group/link"
                                >
                                    View Project Details
                                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
