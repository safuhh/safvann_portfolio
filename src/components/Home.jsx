import React, { memo } from "react";
import PortfolioHero from "./ui/portfolio-hero";

const HomePage = memo(function HomePage({ theme, setTheme }) {
  return (
    <section id="home" className="relative w-full overflow-hidden z-0">
      <PortfolioHero theme={theme} setTheme={setTheme} />
    </section>
  );
});

export default HomePage;