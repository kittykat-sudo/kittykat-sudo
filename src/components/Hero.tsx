import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
            <div>
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">I am a passionate developer creating amazing web experiences.</p>
                <a href="#projects" className="inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition">
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;