import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", target: "#home" },
    { name: "About", target: "#about" },
    { name: "Experience", target: "#experience" },
    { name: "Projects", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

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
    const sections = navItems.map((item) =>
      document.querySelector(item.target)
    );

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((section, index) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="relative flex items-center justify-between bg-neutral-800/40 backdrop-blur-md rounded-full px-6 py-3 border border-neutral-700/50">

          {/* LOGO */}
          <div className="flex flex-col">
            <span className="text-neutral-100 font-bold text-sm tracking-wider">
              RIHEN KRISHNA
            </span>
            <span className="text-neutral-400 font-semibold text-xs tracking-wider">
              MERN DEVELOPER
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-1 bg-neutral-900/50 rounded-full px-2 py-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(index, item.target)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "text-white bg-neutral-700/50"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
                {activeIndex === index && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-neutral-100 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 right-0 z-40 px-6">
          <div className="bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-neutral-700/50 p-6 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(index, item.target)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                  activeIndex === index
                    ? "bg-neutral-700/50 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
