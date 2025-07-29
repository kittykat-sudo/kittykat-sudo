import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">AARONN</div>
        <nav className="flex space-x-8">
          <Link href="/" className="hover:text-orange-400">HOME</Link>
          <Link href="/about" className="hover:text-orange-400">ABOUT ME</Link>
          <Link href="/projects" className="hover:text-orange-400">MY WORKS</Link>
          <Link href="/contact" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">CONTACT</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Adaptive Logo Design<br />
            for Your Brand
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            EXPLORE WORKS
          </button>
        </section>

        {/* About Section */}
        <section className="flex items-center justify-between py-20">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Let's get know<br />
              about me closer
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm a creative and dedicated designer, that can't be bounded or limited.
              Designing, brainstorming or developing. I try to create or build it.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              DISCOVER MORE
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-80 h-96 bg-gray-800 rounded-lg overflow-hidden">
              {/* Add your profile image here */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
            </div>
          </div>
        </section>

        {/* Projects Highlight */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Projects Highlight</h2>
            <button className="text-orange-500 border border-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
              EXPLORE MORE →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">Brand Journey Improvements</h3>
              <p className="text-sm text-gray-400">Brand Identity • Logo Design</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">Brand Grouping</h3>
              <p className="text-sm text-gray-400">UI Design • Logo Design</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">NFT Glimps</h3>
              <p className="text-sm text-gray-400">Branding • 3D Design</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">Brand Suggestions</h3>
              <p className="text-sm text-gray-400">UX Design • Logo Design</p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-8">Testimonial</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-lg leading-relaxed mb-6">
              "Aaron's work developed to work with them start-up fresh. We were looking for a design, somehow logo and 
              brand with somehow appeared to a bigger market matching fast-move pace, modern, and with an international 
              approach. Aaron supported and made a fantastic website together with strong, conceptual, elegant branding. 
              I can't share strong enough how his effort and determination. I would recommend him to anyone looking 
              for a designer."
            </p>
            <p className="font-bold">- Martin Lee</p>
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
              <div className="flex space-x-2 mt-2">
                {/* Social icons would go here */}
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
    </div>
  );
}