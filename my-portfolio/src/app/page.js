import Link from 'next/link';
import PlaceholderProfile from '@/components/PlaceholderProfile';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-blue-600">Your Name</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full-Stack Developer passionate about creating amazing digital experiences
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  View My Work
                </Link>
                <Link href="/contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-white transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <PlaceholderProfile />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-600">&lt;/&gt;</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Next.js, TypeScript</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-green-600">API</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, MongoDB, APIs</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-purple-600">UI</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Tailwind CSS, Responsive Design</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
