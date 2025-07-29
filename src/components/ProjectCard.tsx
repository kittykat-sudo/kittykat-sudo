import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    slug: string;
}

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 h-64 hover:bg-gray-700 transition-colors">
            <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded mb-4"></div>
            <h3 className="font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <Link 
                href={`/projects/${project.slug}`} 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
                View Project
            </Link>
        </div>
    );
};

export default ProjectCard;