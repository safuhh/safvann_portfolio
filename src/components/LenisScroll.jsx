// LenisScroll.jsx
import { useEffect } from 'react';
import Lenis from "lenis";
import { gsap } from "gsap";

export default function LenisScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 0.9,
      infinite: false,
      gestureOrientation: 'vertical',
      normalizeWheel: true,
      smoothWheel: true
    });

    window.lenis = lenis; // Expose for Navbar
    document.documentElement.style.scrollBehavior = 'auto'; // Prevent native smooth scroll fighting Lenis
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}