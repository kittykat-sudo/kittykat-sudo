import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
                <div className="text-xl font-bold">AARONN</div>
                <nav className="flex space-x-8">
                    <Link href="/" className="hover:text-orange-400">HOME</Link>
                    <Link href="/about" className="hover:text-orange-400">ABOUT ME</Link>
                    <Link href="/projects" className="hover:text-orange-400">MY WORKS</Link>
                    <Link href="/contact" className="text-orange-400">CONTACT</Link>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
                    <p className="text-gray-300">For Any Project Knock Us</p>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <ContactForm />
                    </div>
                    <div className="flex items-center">
                        <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <div className="flex justify-center space-x-20">
                        <div>
                            <p className="text-gray-400">Street Avenue 21, CA</p>
                        </div>
                        <div>
                            <p className="text-gray-400">+9 0283353</p>
                        </div>
                        <div>
                            <a href="mailto:info@aaronn.com" className="text-orange-500 underline">info@aaronn.com</a>
                        </div>
                    </div>
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

export default ContactPage;