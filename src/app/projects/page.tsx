import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Orvillsbury',
    description: 'Blue color scheme design project',
    slug: 'orvillsbury',
  },
  {
    id: 2,
    title: 'West Lavada',
    description: 'Green themed branding project',
    slug: 'west-lavada',
  },
  {
    id: 3,
    title: 'Rempelshire',
    description: 'Aqua design portfolio piece',
    slug: 'rempelshire',
  },
  {
    id: 4,
    title: 'Delfinaland',
    description: 'Lime colored creative work',
    slug: 'delfinaland',
  },
  {
    id: 5,
    title: 'Buckridgeburgh',
    description: 'Fuchsia themed project',
    slug: 'buckridgeburgh',
  },
  {
    id: 6,
    title: 'Pfefferstad',
    description: 'Black and white design',
    slug: 'pfefferstad',
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">AARONN</div>
        <nav className="flex space-x-8">
          <Link href="/" className="hover:text-orange-400">HOME</Link>
          <Link href="/about" className="hover:text-orange-400">ABOUT ME</Link>
          <Link href="/projects" className="text-orange-400">MY WORKS</Link>
          <Link href="/contact" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">CONTACT</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">My works</h1>
          <p className="text-gray-300">Showcase About Works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <button className="text-orange-500 border border-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            LOAD MORE WORKS
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-orange-500 mb-2">Get in Touch With Us</p>
            <a href="mailto:info@aaronn.com" className="text-2xl font-bold underline">info@aaronn.com</a>
          </div>
          
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-xl font-bold">AARONN</div>
            <div className="text-center">
              <p>Street Avenue 21, CA</p>
              <p>0-8-00-888-000</p>
            </div>
            <div className="text-right">
              <p>+9 0283353</p>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-8">
            © 2023. Ideapeel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;