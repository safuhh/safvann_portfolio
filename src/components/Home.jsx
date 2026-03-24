import React from "react";
import LightPillar from "./LightPillar";

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 w-full overflow-hidden bg-black"
    >
      {/* 🔥 Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      {/* 🌟 Content Wrapper */}
      <div className="relative z-10 w-full flex items-center min-h-[calc(100vh-80px)]">
        <div className="w-full px-6 md:px-14 xl:px-24 2xl:px-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <p className="text-neutral-500 tracking-[0.25em] uppercase text-xs sm:text-sm">
                MERN Stack Developer
              </p>

              <div className="leading-[1.05]">
                <h1
                  className="font-bold text-neutral-100"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
                >
                  Crafting
                </h1>

                <h1
                  className="font-bold italic text-neutral-100"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
                >
                  Modern
                </h1>

                <h1
                  className="font-bold text-neutral-100"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
                >
                  Web Apps
                </h1>
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
                <button className="px-8 py-3 text-sm sm:text-base bg-neutral-100 text-black font-semibold rounded hover:scale-105 transition-all duration-300">
                  VIEW PROJECTS
                </button>

                <button className="px-8 py-3 text-sm sm:text-base border border-neutral-700 text-neutral-200 rounded hover:bg-neutral-800/50 transition-all duration-300">
                  GET IN TOUCH
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center lg:justify-end">
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

      {/* 🔥 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

      {/* ⬇ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-neutral-600 text-xs tracking-widest">SCROLL</p>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-600 to-transparent"></div>
      </div>

    </section>
  );
}