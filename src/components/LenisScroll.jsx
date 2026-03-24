// LenisScroll.jsx
import { useEffect } from 'react';
import Lenis from "lenis";

export default function LenisScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      infinite: false,
      gestureOrientation: 'vertical',
      normalizeWheel: true,
      smoothWheel: true
    });

    window.lenis = lenis; // Expose for Navbar
    document.documentElement.style.scrollBehavior = 'auto'; // Prevent native smooth scroll fighting Lenis

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}