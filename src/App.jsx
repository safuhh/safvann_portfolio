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
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-neutral-600 border-t-white rounded-full animate-spin"></div>
  </div>
);

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(1);
  const [isFadingOut, setIsFadingOut] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    let startTime = null;
    const duration = 800; // Fast 0.8s minimum duration
    
    const sequence = [
      { p: 1, time: 0 },
      { p: 2, time: 100 },
      { p: 4, time: 200 },
      { p: 95, time: 300 },
      { p: 96, time: 500 },
      { p: 99, time: 650 },
      { p: 100, time: 800 }
    ];

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Find the current step based on elapsed time
      const currentStep = sequence.slice().reverse().find(s => elapsed >= s.time);
      if (currentStep) {
        setProgress(currentStep.p);
      }
      
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        // Once 1.2s passes, wait for the actual page load before opening shutter
        const triggerExit = () => {
          setTimeout(() => {
            setIsFadingOut(true); // 1. Fade out the text first
            setTimeout(() => setIsExiting(true), 400); // 2. Then open the shutters 400ms later
          }, 200);
        };

        if (document.readyState === 'complete') {
          triggerExit();
        } else {
          window.addEventListener('load', triggerExit, { once: true });
        }
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(onComplete, 800); // Shutter animation time
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
      {/* Top Shutter */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/2 bg-[#050505] border-b border-white/5 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
      />
      {/* Bottom Shutter */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] border-t border-white/5 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? 'translate-y-full' : 'translate-y-0'}`}
      />
      
      {/* Content wrapper */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Giant Background Number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[20vw] font-bold text-white/[0.03] select-none pointer-events-none">
          {Math.floor(progress)}
        </div>

        {/* Center Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          
          {/* Top Text sliding UP */}
          <h1 className={`text-white tracking-[0.4em] text-lg md:text-2xl font-medium uppercase mb-4 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isFadingOut ? '-translate-y-12' : 'translate-y-0'}`}>
            Rihen Krishna
          </h1>
          
          {/* Progress Line */}
          <div className="w-full">
            <div className="w-full h-[2px] bg-white/10 relative flex items-center">
              {/* Active Line */}
              <div 
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
              {/* Tracking Dot */}
              <div 
                className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full absolute -ml-1.5 md:-ml-2 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ left: `${progress}%` }}
              />
            </div>
          </div>
          
          {/* Bottom Text sliding DOWN */}
          <div className={`mt-4 text-neutral-500 tracking-[0.4em] text-[10px] uppercase transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isFadingOut ? 'translate-y-12' : 'translate-y-0'}`}>
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [isInitializing, setIsInitializing] = useState(true);

  return (
    <div className={`transition-colors duration-1000 ease-in-out ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      
      {isInitializing && (
        <Preloader onComplete={() => setIsInitializing(false)} />
      )}

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