import LenisSmoothScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Project";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <LenisSmoothScroll>
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