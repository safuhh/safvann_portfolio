import LenisSmoothScroll from "./components/LenisScroll"
import Navbar from './components/Navbar'
import HomePage from './components/Home'
import AboutSection from './components/About'
import ExperienceSection from './components/Experience'
import Footer from './components/Footer'
import ContactSection from './components/Contact'
import ProjectsSection from './components/Project'


function App() {
  return (
 <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-950">
  {/* Global gradient orbs - More glow */}
  <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#5227FF]/25 via-[#FF9FFC]/15 to-transparent rounded-full blur-[120px]"></div>
  <div className="fixed bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#FF9FFC]/25 via-[#5227FF]/15 to-transparent rounded-full blur-[120px]"></div>
  
  {/* Global background pattern */}
  <div className="fixed inset-0 opacity-5">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}
    ></div>
  </div>

  {/* Your sections WITHOUT backgrounds */}
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

export default App

