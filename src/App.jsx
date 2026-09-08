import { PortfolioProvider } from "./context/PortfolioContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Metrics from "./components/Metrics.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import Playground from "./components/Playground.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen text-ink">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Metrics />
          <TechStack />
          <Projects />
          <Playground />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toast />
      </div>
    </PortfolioProvider>
  );
}
