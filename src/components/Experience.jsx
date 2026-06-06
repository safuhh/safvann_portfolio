import React, { useEffect } from 'react';

export default function ExperienceSection({ theme = 'dark', setTheme = () => {} }) {
  const experiences = [
{
id: 1,
period: 'JULY 2025 - PRESENT',
title: 'MERN Stack Developer',
company: 'Bridgeon Solutions',
type: 'On-site',
description:
'Working as a MERN Stack Developer with experience in designing, developing, and maintaining full-stack web applications. Skilled in building scalable solutions using MongoDB, Express.js, React.js, Node.js, and Next.js while collaborating with cross-functional teams to deliver high-quality products.',
responsibilities: [
'Developing and maintaining full-stack web applications using the MERN stack',
'Building responsive and modern user interfaces with React.js, Next.js, Tailwind CSS, and Bootstrap',
'Designing and integrating RESTful APIs using Node.js and Express.js',
'Managing databases and data models using MongoDB',
'Optimizing application performance, security, and user experience',
'Collaborating with designers, developers, and stakeholders to deliver business requirements',
'Using Git and GitHub for version control and team collaboration',
'Deploying and maintaining applications on cloud platforms and production environments'
],
      technologies: ['HTML', 'CSS', 'JavaScript','TypeScript', 'Bootstrap',"Tailwind", "Redux", 'React.js','Next.js', 'Node.js', 'MongoDB', 'Express.js', 'Git','AWS','GitHub', 'Postman', 'Responsive Design']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    const section = document.getElementById('experience');
    if (section) themeObserver.observe(section);

    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 py-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20 reveal">
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-4">
            — PROFESSIONAL JOURNEY —
          </p>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ${theme === 'light' ? 'text-black' : 'text-neutral-100'} leading-tight mb-6 transition-colors duration-700`}>
            Experience
          </h1>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ${theme === 'light' ? 'text-black' : 'text-neutral-100'} leading-tight italic mb-8 transition-colors duration-700`}>
            Timeline
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Tracking my journey through web development, from foundational skills to 
            full-stack expertise, building impactful digital solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b ${theme === 'light' ? 'from-neutral-200 via-neutral-400 to-neutral-200' : 'from-neutral-800 via-neutral-600 to-neutral-800'} transition-colors duration-700`}></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative mb-16 reveal reveal-left"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 ${theme === 'light' ? 'bg-black border-white shadow-black/20' : 'bg-neutral-100 border-black shadow-neutral-500/50'} rounded-full border-4 shadow-lg transition-colors duration-700`}></div>

              {/* Content Card */}
              <div className={`ml-6 md:ml-20 ${theme === 'light' ? 'bg-white border-neutral-300 hover:border-black hover:bg-neutral-50' : 'bg-neutral-900/90 border-neutral-700/50 hover:border-neutral-500 hover:bg-neutral-800'} border rounded-lg p-5 md:p-8 transition-all duration-500`}>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-2">
                    <p className="text-neutral-500 tracking-[0.3em] text-xs uppercase mb-3 font-semibold">
                      {exp.period}
                    </p>
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${theme === 'light' ? 'text-black' : 'text-neutral-100'} transition-colors duration-700`}>
                      {exp.title}
                    </h2>
                    <p className={`text-xl ${theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'} mb-6 transition-colors duration-700`}>
                      {exp.company} <span className="text-neutral-500">• {exp.type}</span>
                    </p>
                    <p className={`${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} leading-relaxed mb-8 transition-colors duration-700`}>
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-neutral-100'} transition-colors duration-700`}>
                        Key Responsibilities & Learning
                      </h3>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li 
                            key={idx}
                            className={`flex items-start ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} reveal reveal-left transition-colors duration-700`}
                            style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                          >
                            <span className="text-neutral-500 mr-3 mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Technologies */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-6 ${theme === 'light' ? 'text-black' : 'text-neutral-100'} transition-colors duration-700`}>
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 ${theme === 'light' ? 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-black hover:text-white' : 'bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:bg-neutral-100 hover:text-black hover:border-neutral-100'} border rounded text-xs transition-all duration-300 cursor-default transform hover:scale-105`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End Indicator */}
          <div 
            className="relative ml-8 md:ml-20 reveal"
          >
            <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 ${theme === 'light' ? 'bg-neutral-300 border-white' : 'bg-neutral-700 border-black'} rounded-full border-4 transition-colors duration-700`}></div>
            <p className={`${theme === 'light' ? 'text-neutral-500' : 'text-neutral-600'} text-sm italic transition-colors duration-700`}>More experiences coming soon...</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2">
            <p className="text-neutral-600 text-xs tracking-widest">CONTINUE</p>
            <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
