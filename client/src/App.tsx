import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

// Components
import Navbar from "./components/Navbar";
import HeroLiquidCode from "./components/HeroLiquidCode";
import ParticleBackground from "./components/ParticleBackground";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection.tsx";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable={true}>
        <TooltipProvider>
          <Toaster />
          <ScrollIndicator />
          <ParticleBackground />
          <Navbar />
          
          <main className="min-h-screen relative z-10">
            <HeroLiquidCode />
            <About />
            <SkillsSection />
            <Projects />
            <Timeline />
            <Contact />
          </main>
          
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
