import { ArrowLeftIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-2xl font-bold text-white">Contact Me</h1>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Let's <span className="text-purple-400">Connect</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Your City, Country</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
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