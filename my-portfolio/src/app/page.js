"use client";
import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-20">
          {/* CHANGED: 12-column grid instead of lg:grid-cols-2 */}
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* CHANGED: Text section → 8 columns on lg */}
            <div className="col-span-12 lg:col-span-8 text-center lg:text-left pl-0 lg:pl-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-blue-600">Abid Hussain</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A modern frontend web developer focused on building clean,
                responsive, and user-centric digital experiences using today’s
                web technologies.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                </button>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-white transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* CHANGED: Image section → 4 columns on lg */}
            <div className="col-span-12 lg:col-span-4 flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/personal_img.png"
                  alt="Profile Picture"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Passionate developer with 1+ years of experience building
                scalable web applications. I specialize in React, Next.js, and
                Node.js, creating solutions that combine beautiful design with
                robust functionality.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or sharing knowledge
                through technical writing.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>🎓 BS Information Technology</li>
                <li>💼 1+ Years Experience</li>
                <li>🌍 Remote Work Enthusiast</li>
                <li>☕ Coffee Powered Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "frontend Web Development intern",
                company: "Code Cesium",
                period: "Sept 2024 - Dec 2024",
                description:
                  "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Collaborated with the team to implement UI components, improve website performance, and ensure cross-browser compatibility.",
              },
              {
                title: "Frontend Developer",
                company: "The Mind Gauge",
                period: "2025 - present",
                description:
                  "Handled end-to-end frontend development responsibilities, delivering responsive and high-quality web interfaces while coordinating with the team to meet project requirements and deadlines.",
              },
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {job.title}
                  </h3>
                  <span className="text-blue-600 font-medium">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-600 font-medium mb-2">{job.company}</p>
                <p className="text-slate-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Skills & Technologies
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["React", "Next.js", "Bootstrap", "Tailwind CSS"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="bg-slate-50 p-3 rounded-lg text-center"
                      >
                        <span className="text-slate-700 font-medium">
                          {skill}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Backend
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Node.js", "Express", "MySQL", "MongoDB"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-slate-50 p-3 rounded-lg text-center"
                    >
                      <span className="text-slate-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Tools & Others
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "VS Code",
                    "GIT",
                    "Figma",
                    "Slack",
                    "Canva",
                    "AI Tools",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-slate-50 p-3 rounded-lg text-center"
                    >
                      <span className="text-slate-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Web Development",
                description:
                  "Custom web applications built with modern frameworks and best practices.",
                icon: "💻",
              },
              {
                title: "API Development",
                description:
                  "RESTful APIs and backend services designed for scalability and performance.",
                icon: "🔗",
              },
              {
                title: "UI/UX Design",
                description:
                  "User-centered design solutions that enhance user experience and engagement.",
                icon: "🎨",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.length > 0
              ? projects.map((project) => (
                  <div
                    key={project._id}
                    className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-slate-200 rounded-lg mb-4"></div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))
              : // Fallback static projects
                [1, 2, 3].map((project) => (
                  <div
                    key={project}
                    className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-slate-200 rounded-lg mb-4"></div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Project {project}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Description of the project and technologies used.
                    </p>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:underline">
                        Live Demo
                      </button>
                      <button className="text-slate-600 hover:underline">
                        GitHub
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Get In Touch
          </h2>
          {showContactForm ? (
            <div>
              <ContactForm />
              <button
                onClick={() => setShowContactForm(false)}
                className="mt-4 text-slate-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Looking for a developer who can take your idea from concept to
                delivery? Let’s work together to build scalable, visually clean,
                and performance-driven web experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <span>📧</span>
                  <span>dev.abidhussain@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span>📱</span>
                  <span>+92 3078057494</span>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
