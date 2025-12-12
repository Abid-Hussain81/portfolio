import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:px-12">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        <div className="flex gap-6">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-purple-400">Your Name</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View My Work <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get In Touch <EnvelopeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating efficient, scalable solutions that make a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-300 text-sm">React, Next.js, TypeScript</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Backend</h4>
                  <p className="text-gray-300 text-sm">Node.js, Python, PostgreSQL</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h4 className="text-white text-xl font-semibold mb-4">Quick Facts</h4>
              <ul className="text-gray-300 space-y-2">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 3+ Years Experience</li>
                <li>🌍 Based in Your City</li>
                <li>☕ Coffee Enthusiast</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600"></div>
                <div className="p-6">
                  <h4 className="text-white text-xl font-semibold mb-2">Project {i}</h4>
                  <p className="text-gray-400 mb-4">A brief description of this amazing project and the technologies used.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Next.js</span>
                  </div>
                  <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Let's Work Together</h3>
          <p className="text-gray-300 text-lg mb-12">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="flex items-center justify-center gap-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Your Name. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
