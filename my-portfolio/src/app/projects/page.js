'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data.length > 0 ? data : fallbackProjects);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  const fallbackProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/project1.jpg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      _id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      image: '/project2.jpg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      _id: '3',
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, and weather alerts using external APIs.',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      image: '/project3.jpg',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading projects...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and showcases different aspects of my development skills.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={project._id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={project.image || '/placeholder-project.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.technologies || ['React', 'Node.js']).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}