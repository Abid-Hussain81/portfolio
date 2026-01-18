import PlaceholderProfile from '@/components/PlaceholderProfile';

export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating web applications that solve real-world problems. I love turning 
                complex ideas into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest trends in web development.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <PlaceholderProfile />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Skills & Technologies
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Full Stack Developer
                </h3>
                <p className="text-blue-600 mb-2">Company Name • 2022 - Present</p>
                <p className="text-gray-600">
                  Developed and maintained web applications using React, Next.js, and Node.js. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Frontend Developer
                </h3>
                <p className="text-blue-600 mb-2">Previous Company • 2021 - 2022</p>
                <p className="text-gray-600">
                  Built responsive user interfaces and improved application performance. 
                  Worked closely with designers to implement pixel-perfect designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}