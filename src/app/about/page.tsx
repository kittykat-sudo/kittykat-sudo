import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
                <div className="text-xl font-bold">AARONN</div>
                <nav className="flex space-x-8">
                    <Link href="/" className="hover:text-orange-400">HOME</Link>
                    <Link href="/about" className="text-orange-400">ABOUT ME</Link>
                    <Link href="/projects" className="hover:text-orange-400">MY WORKS</Link>
                    <Link href="/contact" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">CONTACT</Link>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold mb-4">About Me</h1>
                    <p className="text-gray-300">Little Brief About Myself</p>
                </div>

                <div className="grid grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            My mission<br />
                            is to make<br />
                            design<br />
                            easier.
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-300 leading-relaxed">
                            Create custom Designs with AARONN that converts 
                            more visitors than any website. With lots of unique 
                            design, you can easily select a logo without hassle. 
                            Create custom landing logos with AARONN that 
                            converts more visitors than any website. With lots 
                            of revisions, you can easily build a logo without 
                            porbolem.
                        </p>
                    </div>
                </div>

                {/* Profile Images */}
                <div className="flex gap-8 mb-20">
                    <div className="flex-1">
                        <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <section className="text-center">
                    <h3 className="text-2xl font-bold mb-8">Follow me on:</h3>
                    <div className="flex justify-center space-x-12">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">DRIBBBLE</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">TWITTER</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">FACEBOOK</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">INSTAGRAM</a>
                    </div>
                </section>
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

export default AboutPage;