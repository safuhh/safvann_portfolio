import React from "react";
import LightPillar from "./LightPillar";

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black flex items-start pt-24 md:pt-32
"
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

      {/* 🌟 Content Wrapper (FULL WIDTH) */}
      <div className="relative z-10 w-full px-6 md:px-14 xl:px-24 2xl:px-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <p className="text-neutral-500 tracking-[0.3em] uppercase text-sm">
              MERN Stack Developer
            </p>

            <div className="leading-tight">
              <h1
                className="font-bold text-neutral-100"
                style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
              >
                Crafting
              </h1>
              <h1
                className="font-bold italic text-neutral-100"
                style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
              >
                Modern
              </h1>
              <h1
                className="font-bold text-neutral-100"
                style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
              >
                Web Apps
              </h1>
            </div>

            <p
              className="text-neutral-400 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.4rem)" }}
            >
              Building full-stack applications with MongoDB, Express, React,
              and Node.js. Transforming ideas into scalable, high-performance
              web solutions.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-10 py-4 bg-neutral-100 text-black font-semibold rounded hover:scale-105 transition-all duration-300">
                VIEW PROJECTS
              </button>

              <button className="px-10 py-4 border border-neutral-700 text-neutral-200 rounded hover:bg-neutral-800/50 transition-all duration-300">
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="text-center lg:text-right space-y-6">
              <h2
                className="font-bold tracking-widest text-neutral-100"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
              >
                RIHEN KRISHNA
              </h2>

              <p
                className="text-neutral-400 font-semibold"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.6rem)" }}
              >
                Full-Stack Developer
              </p>

              <div className="w-24 h-[2px] bg-gradient-to-r from-violet-500 to-pink-400 mx-auto lg:ml-auto"></div>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-neutral-600 text-xs tracking-widest">SCROLL</p>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent"></div>
      </div>
    </section>
  );
}
