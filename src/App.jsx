import React, { useState, Suspense, lazy } from 'react';
import LenisSmoothScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
const AboutSection = lazy(() => import("./components/About"));
const ExperienceSection = lazy(() => import("./components/Experience"));
const ProjectsSection = lazy(() => import("./components/Project"));
const ContactSection = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));


const Loader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-neutral-600 border-t-white rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`transition-colors duration-500 ease-in-out ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>

      <LenisSmoothScroll>
        <Navbar />
        <HomePage theme={theme} setTheme={setTheme} />
        <div className={`relative z-10 w-full ${theme === 'light' ? 'bg-white' : 'bg-black'} transition-colors duration-500`}>
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