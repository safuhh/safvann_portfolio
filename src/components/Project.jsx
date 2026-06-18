import React, { memo, useEffect } from 'react';

const ProjectsSection = memo(function ProjectsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      const elements = section.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

const projects = [
{
  id: 1,
  title: 'MediFind',
  year: '2025',
  type: 'Healthcare Technology Platform',
  image: '/medi.png',
  url: 'https://medifind-client-side.vercel.app/',
  description:
    'A modern healthcare platform connecting users with medical services through an intuitive and responsive experience. Built using Next.js, TypeScript, Express.js, and MongoDB, featuring secure authentication, appointment management, RESTful APIs, and scalable backend architecture.'
},
{
  id: 2,
  title: 'Vyntra',
  year: '2026',
  type: 'Full-Stack E-Commerce Platform',
  image: '/vyntra.png',
  url: 'https://vyntra-dqdt.vercel.app/',
  description:
    'A modern full-stack e-commerce platform built with React, Express.js, and MongoDB. Features secure user authentication, product browsing, advanced filtering, shopping cart management, order processing, responsive design, and scalable REST APIs for a seamless online shopping experience.'
},
{
  id: 3,
  title: 'Zoelume',
  year: '2026',
  type: 'Movie Discovery Platform',
  image: '/zoe.png',
  url: 'https://zoelume.vercel.app/',
  description:
    'A modern movie discovery platform powered by the TMDB API, allowing users to explore trending, popular, and top-rated movies. Features include advanced search, detailed movie information, genre-based filtering, responsive design, and a visually engaging user experience optimized for performance.'
}
];

  return (
    <section id="projects" className="min-h-screen relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 py-20 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">
            — PROJECTS —
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-100 mb-4">
            Featured
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-100 mb-8">
            Creative Works
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Explore my diverse portfolio spanning full-stack, frontend & mobile apps
          </p>
        </div>

      

        {/* Projects Grid */}
        <div className="flex flex-col gap-16 md:gap-24 pb-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="static lg:sticky"
              style={{ 
                top: `calc(100px + ${index * 30}px)`,
                zIndex: index + 1
              }}
            >
              <div
                className={`group flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-6 sm:p-8 lg:p-12 transition-all duration-500 shadow-2xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="w-full lg:w-3/5">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-video bg-neutral-800/50">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-8xl text-neutral-600">
                        
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Container */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  {/* Category Pill */}
                  <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-400/30 text-white text-sm font-semibold tracking-wide mb-6 w-fit">
                    {project.type}
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-4 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                     <span className="text-neutral-500 font-medium text-lg hidden sm:block">
                       {project.year}
                     </span>
                     {/* View Project Button */}
                     {project.url && (
                       <a
                         href={project.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label={`View ${project.title}`}
                         className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:py-3 sm:px-6 rounded-full bg-white text-black font-semibold text-sm tracking-widest uppercase hover:scale-[1.02] transition-all duration-300"
                       >
                         <span>View Project</span>
                         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="7" y1="17" x2="17" y2="7"></line>
                           <polyline points="7 7 17 7 17 17"></polyline>
                         </svg>
                       </a>
                     )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default ProjectsSection;