import Link from 'next/link';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { slug } = params;

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

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Project Detail</h1>
          <p className="text-gray-300">Details about The Project</p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-600"></div>
          </div>
        </div>

        {/* Project Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Project Story</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The fact that photography has different meanings to different people is one of the many components 
            of its appeal. Photography is able to transcend part of our life that is how very difficult to 
            reach by words.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We respect imagining something without the opportunity to capture it can flow, we would not be able to 
            appreciate the growing role of intuition in the imagery if we did not have pictures.
          </p>
        </section>

        {/* Day One Section */}
        <section className="mb-12">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
            </div>
            <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Day One</h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum est qui maximus ad eiusmod qua photographers as heartbreak, ingredients, advertisement on 
            television on the Internet, but we still were even more.
          </p>
          <p className="text-gray-300">
            Lorem ipsum est qui maximus ad eiusmod qua photographers as heartbreak, ingredients, advertisement and 
            photography est in a juices that it is a combination of thought imagination, visual design, technical 
            skill and organization skills.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-gray-800 pt-8">
          <Link href="/projects" className="text-orange-500 hover:text-orange-400">
            ← PREVIOUS WORK
          </Link>
          <Link href="/projects" className="text-orange-500 hover:text-orange-400">
            NEXT WORK →
          </Link>
        </div>

        {/* Other Projects */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">Logo Project 1</h3>
              <p className="text-sm text-gray-400">BRANDING</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-red-400 to-red-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">Logo Project 2</h3>
              <p className="text-sm text-gray-400">BRANDING</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 h-64">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded mb-4"></div>
              <h3 className="font-bold mb-2">Logo Project 3</h3>
              <p className="text-sm text-gray-400">BRANDING</p>
            </div>
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

export default ProjectPage;