import LenisSmoothScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Project";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div className="bg-black text-white">
      <LenisSmoothScroll>
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#A855F7"
        />
        <Navbar />
        <HomePage />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </LenisSmoothScroll>
    </div>
  );
}
export default App;