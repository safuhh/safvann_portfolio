import React, { useState, Suspense, lazy } from 'react';
import LenisSmoothScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
const AboutSection = lazy(() => import("./components/About"));
const ExperienceSection = lazy(() => import("./components/Experience"));
const ProjectsSection = lazy(() => import("./components/Project"));
const ContactSection = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
import SplashCursor from "./components/SplashCursor";

const Loader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
    <div className="relative flex items-center justify-center w-24 h-24 mb-8">
      <div className="absolute w-full h-full border-t border-b border-neutral-600 rounded-full animate-[spin_2s_linear_infinite]"></div>
      <div className="absolute w-16 h-16 border-l border-r border-neutral-400 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
    </div>
    <div className="text-neutral-400 tracking-[0.3em] text-xs uppercase font-light animate-pulse">
      Curating Experience
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`transition-colors duration-1000 ease-in-out ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <LenisSmoothScroll>
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.05}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#7e2da6"
        />
        <Navbar />
        <HomePage />
        <div className={`relative z-10 w-full ${theme === 'light' ? 'bg-white' : 'bg-black'} transition-colors duration-1000`}>
          <Suspense fallback={<Loader />}>
            <AboutSection />
            <ExperienceSection theme={theme} setTheme={setTheme} />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </Suspense>
        </div>
      </LenisSmoothScroll>
    </div>
  );
}
export default App;