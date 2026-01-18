import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-sm font-bold text-blue-600">@</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-sm font-bold text-green-600">in</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                    <p className="text-gray-600">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-sm font-bold text-purple-600">git</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">GitHub</h3>
                    <p className="text-gray-600">github.com/yourusername</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Response Time</h3>
                <p className="text-gray-600">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via email directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}