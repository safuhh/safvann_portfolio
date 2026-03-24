import React, { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects = [
    {
      id: 1,
      title: 'Developer Portfolio',
      year: '2025',
      category: 'Frontend',
      image: "/portfolio.jpg",
      url: null
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      year: '2025',
      category: 'Full Stack',
      image: '/prowellHome.jpg',
      url: 'https://prowellfitness.vercel.app/'
    },
    {
      id: 3,
      title: 'Strevia Streaming',
      year: '2026',
      category: 'Full Stack',
      image: '/Strevia.jpg',
      url: 'https://strevia-streaming.vercel.app/'
    },
  ];

  const filters = ['All Projects', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter, filteredProjects]); // Re-observe when items change

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 py-20 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">
            — PORTFOLIO —
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-100 mb-4">
            Featured
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-100 mb-8">
            Creative Works
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Explore my diverse portfolio spanning full-stack, frontend & mobile apps
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-neutral-100 text-black'
                  : 'border border-neutral-700 text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-neutral-900/40 border border-neutral-700 rounded-lg overflow-hidden hover:border-neutral-500 transition-all">

                {/* Image */}
                <div className="h-64 relative overflow-hidden bg-neutral-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-8xl text-neutral-600">
                      
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold text-neutral-100">
                      {project.title}
                    </h3>
                    <span className="text-neutral-500 text-sm">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm">
                    {project.category}
                  </p>

                  {/* View Project Link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}