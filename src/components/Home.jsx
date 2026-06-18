import React, { useEffect, useRef, useState, memo } from "react";
import { gsap } from "gsap";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

const HomePage = memo(function HomePage() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wordsRef = useRef([]);
  const homeRef = useRef(null);
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    // Initial entrance animations with GSAP (runs once, no scroll overhead)
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Left side slides up
    tl.fromTo(
      leftRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Heading words stagger in
    tl.fromTo(
      wordsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      "-=0.6"
    );

    // Right side fades in softly without moving the heavy WebGL canvas
    tl.fromTo(
      rightRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      "-=0.5"
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const words = ["Crafting", "Modern", "Web Apps"];

  return (
    <section
      id="home"
      ref={homeRef}
      className="relative min-h-screen pt-20 w-full overflow-hidden bg-transparent z-0"
    >
      {/* Background Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative z-10 w-full flex items-center min-h-[calc(100vh-80px)]">
        <div className="w-full px-6 md:px-14 xl:px-24 2xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div ref={leftRef} className="space-y-6" style={{ opacity: 0, willChange: "transform, opacity" }}>
              <p className="text-neutral-500 tracking-[0.25em] uppercase text-xs sm:text-sm">
                MERN Stack Developer
              </p>

              <div className="leading-[1.05] space-y-2">
                {words.map((word, index) => (
                  <h1
                    key={index}
                    ref={el => (wordsRef.current[index] = el)}
                    className={`font-bold text-neutral-100 ${word === "Modern" ? "italic" : ""}`}
                    style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", opacity: 0, willChange: "transform, opacity" }}
                  >
                    {word}
                  </h1>
                ))}
              </div>

              <p
                className="text-neutral-400 max-w-xl leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.25rem)" }}
              >
                Building full-stack applications with MongoDB, Express,
                React, and Node.js. Transforming ideas into scalable,
                high-performance web solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    const target = document.querySelector('#projects');
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                    else target?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-neutral-100 text-black font-semibold rounded hover:scale-105 transition-all duration-300"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={() => {
                    const target = document.querySelector('#contact');
                    if (window.lenis) window.lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                    else target?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 border border-neutral-700 text-neutral-200 rounded hover:bg-neutral-800/50 transition-all duration-300"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              ref={rightRef}
              className="relative hidden lg:flex w-full h-[600px] justify-end"
              style={{ opacity: 0 }}
            >
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full absolute inset-0 pointer-events-auto"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
    </section>
  );
});

export default HomePage;