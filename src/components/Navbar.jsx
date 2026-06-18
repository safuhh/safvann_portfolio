import React, { useEffect, useState, useRef, memo } from "react";

const navItems = [
  { name: "Home", target: "#home" },
  { name: "About", target: "#about" },
  { name: "Experience", target: "#experience" },
  { name: "Projects", target: "#projects" },
  { name: "Contact", target: "#contact" },
];

const Navbar = memo(function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Use ref to cache the DOM elements to prevent querySelector on every scroll
  const sectionsRef = useRef([]);

  // 🔥 Scroll to section (Lenis aware)
  const handleScroll = (index, target) => {
    setActiveIndex(index);
    setMenuOpen(false);

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -90,
        duration: 1,
      });
    } else {
      document.querySelector(target)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // 🔥 ScrollSpy
  useEffect(() => {
    let rafId;

    const getSection = (index, target) => {
      if (!sectionsRef.current[index]) {
        sectionsRef.current[index] = document.querySelector(target);
      }
      return sectionsRef.current[index];
    };

    const onScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollPos = window.scrollY + window.innerHeight / 3; // Trigger when section hits top 1/3rd of screen
        let currentActive = 0; // Default to Home
        
        for (let i = 0; i < navItems.length; i++) {
          const section = getSection(i, navItems[i].target);
          if (!section) continue;
          
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = section.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            currentActive = i;
            // Break early so the highest visible section wins if there's any layout overlap
            break; 
          }
        }
        
        setActiveIndex((prev) => (prev !== currentActive ? currentActive : prev));
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Check immediately, and also after layout stabilizes (handles lazy load & scroll restoration)
    onScroll();
    const timeoutId1 = setTimeout(onScroll, 100);
    const timeoutId2 = setTimeout(onScroll, 500);
    const timeoutId3 = setTimeout(onScroll, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="relative flex items-center justify-between bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-2xl px-8 py-4 border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

          {/* LOGO */}
          <div className="flex flex-col group cursor-pointer" onClick={() => handleScroll(0, '#home')}>
            <span className="text-white font-medium text-sm tracking-[0.2em] group-hover:text-neutral-300 transition-colors">
              MUHAMMED SAFVAN
            </span>
            <span className="text-neutral-400 font-light text-[10px] tracking-[0.3em] mt-1">
              FULL STACK DEVELOPER
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(index, item.target)}
                className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-all duration-500 py-2 group ${
                  activeIndex === index
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-white transition-all duration-500 ${
                    activeIndex === index ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-neutral-400 p-2 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden fixed top-[100px] left-0 right-0 z-40 px-6 transition-all duration-500 origin-top ${
          menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-2xl border border-white/[0.08] p-6 space-y-2 shadow-2xl">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(index, item.target)}
              className={`block w-full text-left px-5 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                activeIndex === index
                  ? "text-white bg-white/[0.05] rounded-xl border border-white/[0.05]"
                  : "text-neutral-500 hover:text-white hover:bg-white/[0.02] rounded-xl border border-transparent"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
