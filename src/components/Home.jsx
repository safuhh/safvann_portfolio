import React, { memo } from "react";
import Aurora from "./ui/aurora";

const HomePage = memo(function HomePage({ theme, setTheme }) {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden z-0 bg-black">
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={["#7e00f4", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Building digital experiences.
        </h1>
        
        <p className="mt-8 text-white/50 text-sm md:text-base font-light tracking-[0.2em] uppercase max-w-2xl mx-auto">
          Designing human experience in code.
        </p>
      </div>
    </section>
  );
});

export default HomePage;