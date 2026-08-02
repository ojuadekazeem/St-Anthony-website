import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import Impact from "../components/Impact";
import Gallery from "../components/Gallery";
import GetInvolved from "../components/GetInvolved";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-purple-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Impact />
        <Gallery />
        <GetInvolved />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
