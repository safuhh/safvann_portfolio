import React, { useState, useEffect } from 'react';

export default function ProjectsSection() {

const projects = [
  {
    id: 1,
    title: 'Developer Portfolio',
    year: '2025',
    type: 'Portfolio Website',
    image: "/portfolio.png",
    url: null,
    description:
      "A visually engaging and interactive developer portfolio built to showcase projects, technical skills, and professional experience with smooth animations and modern UI design."
  },
  {
    id: 2,
    title: 'Prowell Fitness',
    year: '2025',
    type: 'Fitness supplyment E-Commerce Platform',
    image: '/E-com.png',
    url: 'https://prowellfitness.vercel.app/',
    description:
      "A full-featured e-commerce platform with secure authentication, product management, shopping cart functionality, and a streamlined checkout experience."
  },
  {
    id: 3,
    title: 'Strevia Streaming',
    year: '2026',
    type: 'Streaming Platform',
    image: '/Strevia.png',
    url: 'https://strevia-streaming.vercel.app/',
    description:
      "A modern streaming platform focused on seamless media playback, personalized recommendations, user watchlists, and responsive cross-device viewing experiences."
  },
  {
    id: 4,
    title: 'Fework',
    year: '2026',
    type: 'Hyperlocal Service Marketplace',
    image: '/fework-ss.png',
    url: 'https://fework.vercel.app/',
    description:
      "A hyperlocal service marketplace designed to connect clients and professionals through project listings, streamlined communication, and efficient workflow management."
  },
  {
    id: 5,
    title: 'The Lost Cabins',
    year: '2026',
    type: 'TheLostCabins Official Website',
    image: '/LostCabins.png',
    url: 'https://thelostcabins.in/',
    description:
      "A premium resort and hospitality website crafted for TheLostCabins Resort to deliver an immersive booking experience with elegant visuals, smooth interactions, and nature-inspired design aesthetics."
  },
];

  return (
    <section id="projects" className="min-h-screen relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 py-20 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">
            — PORTFOLIO —
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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
            <button
              className={'px-6 py-3 rounded-full font-medium transition-all duration-300 bg-neutral-100 text-black border border-neutral-700'}
            >
              All Projects
            </button>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-16 md:gap-24 pb-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky"
              style={{ 
                top: `calc(100px + ${index * 30}px)`,
                zIndex: index + 1
              }}
            >
              <div
                className={`group reveal flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-6 sm:p-8 lg:p-12  transition-all duration-500 shadow-2xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="w-full lg:w-3/5">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-video bg-neutral-800/50 flex items-center justify-center p-4 sm:p-8">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="max-w-full max-h-full rounded-xl shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out"
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

                  <div className="flex items-center justify-between">
                     <span className="text-neutral-500 font-medium text-lg">
                       {project.year}
                     </span>
                     {/* View Project Button */}
                     {project.url && (
                       <a
                         href={project.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label={`View ${project.title}`}
                         className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-400/30 text-white shadow-lg shadow-teal-500/10 hover:border-teal-400/60 hover:shadow-teal-500/30 hover:scale-110 transition-all duration-300 group/btn"
                       >
                         <svg className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
}