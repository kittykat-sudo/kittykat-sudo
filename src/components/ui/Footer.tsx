import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                    <p className="text-orange-500 mb-2">Get in Touch With Us</p>
                    <a href="mailto:info@aaronn.com" className="text-2xl font-bold underline text-white">
                        info@aaronn.com
                    </a>
                </div>
                
                <div className="flex justify-between items-center pt-8 border-t border-gray-800">
                    <div className="text-xl font-bold text-white">AARONN</div>
                    <div className="text-center text-white">
                        <p>Street Avenue 21, CA</p>
                        <p>0-8-00-888-000</p>
                    </div>
                    <div className="text-right text-white">
                        <p>+9 0283353</p>
                        <div className="flex space-x-2 mt-2 justify-end">
                            <div className="w-6 h-6 bg-gray-600 rounded"></div>
                            <div className="w-6 h-6 bg-gray-600 rounded"></div>
                            <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-gray-500 text-sm mt-8">
                    © 2023. Ideapeel. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;