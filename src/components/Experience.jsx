import React, { useEffect, useRef, useState } from 'react';

export default function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  const experiences = [
    {
      id: 1,
      period: 'JULY 2025 - PRESENT',
      title: 'MERN Stack Developer Intern',
      company: 'Bridgeon Solutions',
      type: 'on-site',
      description: 'Currently working as a Web Development Intern, gaining practical experience in front-end and back-end technologies. Building responsive user interfaces and collaborating with the development team to support real-world projects and client requirements.',
      responsibilities: [
        'Building responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript',
        'Collaborating with the development team to support real-world projects and client requirements',
        'Actively contributing to tasks involving code optimization, bug fixing, and deployment practices',
        'Enhancing skills in teamwork, version control (Git), and industry-standard workflows'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap',"Tailwind", "Redux", 'React', 'Node.js', 'MongoDB', 'Express', 'Git', 'Responsive Design']
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          if (entry.isIntersecting) {
            // Add to visible items when entering viewport
            setVisibleItems((prev) => new Set([...prev, id]));
          } else {
            // Remove from visible items when leaving viewport
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 py-20 relative z-10">
        
        {/* Header */}
        <div 
          data-animate 
          data-id="header"
          className={`mb-20 transition-all duration-1000 ${
            visibleItems.has('header') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-4">
            — PROFESSIONAL JOURNEY —
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight mb-6">
            Experience
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight italic mb-8">
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
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-800 via-neutral-600 to-neutral-800"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              data-animate
              data-id={`exp-${exp.id}`}
              className={`relative mb-16 transition-all duration-1000 delay-${index * 200} ${
                visibleItems.has(`exp-${exp.id}`)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 bg-neutral-100 rounded-full border-4 border-black shadow-lg shadow-neutral-500/50"></div>

              {/* Content Card */}
              <div className="ml-8 md:ml-20 bg-neutral-900/40 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6 md:p-8 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-500">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-2">
                    <p className="text-neutral-500 tracking-[0.3em] text-xs uppercase mb-3 font-semibold">
                      {exp.period}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-100">
                      {exp.title}
                    </h2>
                    <p className="text-xl text-neutral-300 mb-6">
                      {exp.company} <span className="text-neutral-500">• {exp.type}</span>
                    </p>
                    <p className="text-neutral-400 leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-neutral-100">
                        Key Responsibilities & Learning
                      </h3>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li 
                            key={idx}
                            className={`flex items-start text-neutral-400 transition-all duration-500 delay-${(index + idx + 1) * 100} ${
                              visibleItems.has(`exp-${exp.id}`)
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-5'
                            }`}
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
                    <h3 className="text-lg font-semibold mb-6 text-neutral-100">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 bg-neutral-800/50 border border-neutral-700 rounded text-xs text-neutral-300 hover:bg-neutral-100 hover:text-black hover:border-neutral-100 transition-all duration-300 cursor-default transform hover:scale-105 ${
                            visibleItems.has(`exp-${exp.id}`)
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-90'
                          }`}
                          style={{ transitionDelay: `${(idx + 5) * 50}ms` }}
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
            data-animate
            data-id="timeline-end"
            className={`relative ml-8 md:ml-20 transition-all duration-1000 ${
              visibleItems.has('timeline-end')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 bg-neutral-700 rounded-full border-4 border-black"></div>
            <p className="text-neutral-600 text-sm italic">More experiences coming soon...</p>
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