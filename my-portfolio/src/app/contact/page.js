'use client';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 {...fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </motion.h1>
          <motion.p {...fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div {...fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:dev.abidhussain@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors">dev.abidhussain@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaLinkedin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors" href="https://www.linkedin.com/in/abid-hussain-6853043a1/" target="_blank" rel="noopener noreferrer">linkedin.com/in/abid-hussain-6853043a1/</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <FaGithub className="text-gray-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">GitHub</h3>
                    <a className="text-gray-600 hover:text-gray-700 transition-colors" href="https://github.com/Abid-Hussain81" target="_blank" rel="noopener noreferrer">github.com/Abid-Hussain81</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Response Time</h3>
                <p className="text-gray-600">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via email directly.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeInRight} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}