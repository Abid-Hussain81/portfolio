import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce.vercel.app",
    features: ["Payment Processing", "Inventory Management", "User Authentication", "Admin Dashboard"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/yourusername/taskmanager",
    live: "https://your-taskmanager.vercel.app",
    features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Tracking"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    github: "https://github.com/yourusername/weather",
    live: "https://your-weather.vercel.app",
    features: ["Location Detection", "7-Day Forecast", "Interactive Maps", "Weather Alerts"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
    features: ["Responsive Design", "Dark Mode", "Animations", "SEO Optimized"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-2xl font-bold text-white">My Projects</h1>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A collection of projects that showcase my skills in web development, 
          from simple applications to complex full-stack solutions.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className={`h-64 ${project.image} flex items-center justify-center`}>
                  <h3 className="text-3xl font-bold text-white text-center px-4">{project.title}</h3>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-300 text-lg mb-6">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-gray-400 text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      GitHub <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Live Demo <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Interested in Working Together?</h3>
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
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