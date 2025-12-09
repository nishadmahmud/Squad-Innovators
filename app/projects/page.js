"use client";

import React, { useState, useMemo } from 'react';
import { clientsData } from '@/lib/clientsData';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectFilters from '@/components/projects/ProjectFilters';
import ProjectGrid from '@/components/projects/ProjectGrid';
import ProjectModal from '@/components/projects/ProjectModal';
import ConsultationForm from '@/components/projects/ConsultationForm';

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'all') {
            return clientsData;
        }

        // Map category IDs to category names
        const categoryMap = {
            'website': 'Website',
            'graphics': 'Graphics',
            'mobile-apps': 'Mobile Apps',
            'management-software': 'Management Software',
        };

        const categoryName = categoryMap[selectedCategory];
        return clientsData.filter(project => project.category === categoryName);
    }, [selectedCategory]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handlePrevProject = () => {
        const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
        if (currentIndex > 0) {
            setSelectedProject(filteredProjects[currentIndex - 1]);
        }
    };

    const handleNextProject = () => {
        const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
        if (currentIndex < filteredProjects.length - 1) {
            setSelectedProject(filteredProjects[currentIndex + 1]);
        }
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <ProjectsHero />

            {/* Filter Tabs */}
            <ProjectFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            {/* Project Grid */}
            <ProjectGrid
                projects={filteredProjects}
                onProjectClick={handleProjectClick}
            />

            {/* Consultation Form */}
            <ConsultationForm />

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    allProjects={filteredProjects}
                    onClose={handleCloseModal}
                    onPrev={handlePrevProject}
                    onNext={handleNextProject}
                />
            )}
        </div>
    );
}
