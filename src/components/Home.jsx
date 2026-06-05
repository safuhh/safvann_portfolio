import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LightPillar from "./LightPillar";

export default function HomePage() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wordsRef = useRef([]);

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

    // Right side slides from right
    tl.fromTo(
      rightRef.current,
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.8"
    );

    return () => tl.kill();
  }, []);

  const words = ["Crafting", "Modern", "Web Apps"];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 w-full overflow-hidden bg-transparent z-0"
    >
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={1}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <div className="relative z-10 w-full flex items-center min-h-[calc(100vh-80px)]">
        <div className="w-full px-6 md:px-14 xl:px-24 2xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div ref={leftRef} className="space-y-6" style={{ opacity: 0 }}>
              <p className="text-neutral-500 tracking-[0.25em] uppercase text-xs sm:text-sm">
                MERN Stack Developer
              </p>

              <div className="leading-[1.05] space-y-2">
                {words.map((word, index) => (
                  <h1
                    key={index}
                    ref={el => (wordsRef.current[index] = el)}
                    className={`font-bold text-neutral-100 ${word === "Modern" ? "italic" : ""}`}
                    style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", opacity: 0 }}
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
              className="flex justify-center lg:justify-end"
              style={{ opacity: 0 }}
            >
              <div className="text-center lg:text-right space-y-5">
                <h2
                  className="font-bold tracking-widest text-neutral-100"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}
                >
                  RIHEN KRISHNA
                </h2>

                <p
                  className="text-neutral-400 font-semibold"
                  style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)" }}
                >
                  Full-Stack Developer
                </p>

                <div className="w-20 h-[2px] bg-gradient-to-r from-violet-500 to-pink-400 mx-auto lg:ml-auto"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
    </section>
  );
}