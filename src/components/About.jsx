import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-20 sm:py-28 md:py-36"
    >

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-body text-white/40 tracking-[0.3em] text-sm uppercase mb-6">
            — ABOUT ME —
          </p>

<h2 className="font-heading
               text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
               font-semibold text-white leading-tight">
  The Story Behind
</h2>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
                <img
                  src="./aboutrihen.jpeg"
                  alt="Rihen Krishna - MERN Stack Developer"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-teal-400/30 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-purple-400/30 rounded-bl-3xl" />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* QUOTE */}
            <div className="flex items-start space-x-4">
              <div className="text-teal-400/20 text-5xl font-heading leading-none">
                "
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white italic">
                Code That Speaks Volumes
              </h3>
            </div>

            {/* PARAGRAPHS */}
            <div className="space-y-6 font-body text-white/70 text-lg leading-relaxed">
              <p>
                I’m a passionate{" "}
                <strong className="text-white">MERN Stack Developer</strong> who
                loves building modern, scalable, and high-performance web
                applications.
              </p>

              <p>
                From crafting beautiful interfaces in{" "}
                <strong className="text-white">React</strong> to building secure
                backends with{" "}
                <strong className="text-white">Node.js & Express</strong>.
              </p>

              <p>
                I continuously explore new technologies to deliver clean,
                maintainable, and future-ready solutions.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => {
                  if (window.lenis) {
                    window.lenis.scrollTo("#projects", {
                      offset: -120, // navbar height
                      duration: 1.2,
                    });
                  } else {
                    document.querySelector("#projects")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="group inline-flex items-center gap-3
             px-6 sm:px-8 py-3 sm:py-4
             bg-gradient-to-r from-teal-500/20 to-purple-500/20
             border border-teal-400/30
             rounded-full text-white
             hover:border-teal-400/60
             transition-all duration-300
             text-sm sm:text-base
             font-body tracking-wide"
              >
                VIEW MY WORK
                <svg
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
