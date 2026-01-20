const mongoose = require('mongoose');

// Sample projects data
const sampleProjects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-app",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization",
    technologies: ["React", "Chart.js", "Weather API"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-app",
    featured: true
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/portfolio');
    
    const Project = mongoose.model('Project', {
      title: String,
      description: String,
      technologies: [String],
      liveUrl: String,
      githubUrl: String,
      featured: Boolean,
      createdAt: { type: Date, default: Date.now }
    });

    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();