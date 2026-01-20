"use client";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function About() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-8 text-center lg:text-left pl-0 lg:pl-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-600">Abid Hussain</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate frontend web developer with 1+ years of experience building
                scalable web applications. I specialize in React, Next.js, and
                Node.js, creating solutions that combine beautiful design with
                robust functionality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("experience")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Experience
                </button>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-white transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
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

      {/* Personal Story Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8 sm:mb-12">
            My Story
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                My journey into web development started during my BS in Information Technology. 
                What began as curiosity about how websites work quickly evolved into a passion 
                for creating digital experiences that make a difference.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or sharing knowledge
                through technical writing. I believe in continuous learning and 
                staying updated with the latest web development trends.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>🎓 BS Information Technology</li>
                <li>💼 1+ Years Experience</li>
                <li>🌍 Remote Work Enthusiast</li>
                <li>☕ Coffee Powered Developer</li>
                <li>📚 Continuous Learner</li>
                <li>🚀 Problem Solver</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8 sm:mb-12">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              {
                title: "Frontend Web Development Intern",
                company: "Code Cesium",
                period: "Sept 2024 - Dec 2024",
                description:
                  "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Collaborated with the team to implement UI components, improve website performance, and ensure cross-browser compatibility. Gained hands-on experience with modern development workflows and version control.",
                achievements: [
                  "Built 5+ responsive web components",
                  "Improved website performance by 25%",
                  "Collaborated with 3-person development team"
                ]
              },
              {
                title: "Frontend Developer",
                company: "The Mind Gauge",
                period: "2025 - Present",
                description:
                  "Handling end-to-end frontend development responsibilities, delivering responsive and high-quality web interfaces while coordinating with the team to meet project requirements and deadlines. Leading frontend architecture decisions and mentoring junior developers.",
                achievements: [
                  "Leading frontend development for 3+ projects",
                  "Implemented modern React patterns and best practices",
                  "Reduced development time by 30% through code optimization"
                ]
              },
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                    {job.title}
                  </h3>
                  <span className="text-blue-600 font-medium text-sm sm:text-base">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-600 font-medium mb-3">{job.company}</p>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">{job.description}</p>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-slate-700">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8 sm:mb-12">
            Skills & Technologies
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["React", "Next.js", "Bootstrap", "Tailwind CSS"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="bg-slate-50 p-2 sm:p-3 rounded-lg text-center"
                      >
                        <span className="text-slate-700 font-medium text-sm sm:text-base">
                          {skill}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
                  Backend
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Node.js", "Express", "MySQL", "MongoDB"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-slate-50 p-2 sm:p-3 rounded-lg text-center"
                    >
                      <span className="text-slate-700 font-medium text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
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
                      className="bg-slate-50 p-2 sm:p-3 rounded-lg text-center"
                    >
                      <span className="text-slate-700 font-medium text-sm sm:text-base">
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

      {/* Values & Approach Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8 sm:mb-12">
            My Approach
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "User-Centric Design",
                description:
                  "Every project starts with understanding the user's needs and creating intuitive experiences.",
                icon: "👥",
              },
              {
                title: "Clean Code",
                description:
                  "Writing maintainable, scalable code that follows best practices and industry standards.",
                icon: "💻",
              },
              {
                title: "Continuous Learning",
                description:
                  "Staying updated with the latest technologies and trends to deliver modern solutions.",
                icon: "📚",
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">
                  {approach.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8">
            Let's Work Together
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
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's collaborate to create 
                something amazing together. I'm always excited to work on new 
                and challenging projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <span>📧</span>
                  <span className="text-sm sm:text-base">dev.abidhussain@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span>📱</span>
                  <span className="text-sm sm:text-base">+92 3078057494</span>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}