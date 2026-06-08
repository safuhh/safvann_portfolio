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
  <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
    {/* Futuristic rotating rings */}
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute w-full h-full border border-purple-500/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
      <div className="absolute w-full h-full border-t-2 border-r-2 border-purple-500 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
      <div className="absolute w-3/4 h-3/4 border border-blue-500/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
      <div className="absolute w-3/4 h-3/4 border-b-2 border-l-2 border-blue-500 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
      
      {/* Center glowing core */}
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full animate-pulse blur-sm"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full"></div>
    </div>
    
    {/* Cyberpunk text */}
    <div className="mt-8 relative flex flex-col items-center">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-[0.4em] text-sm uppercase font-bold animate-pulse">
        Initializing System
      </div>
      <div className="flex space-x-1 mt-2">
        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
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