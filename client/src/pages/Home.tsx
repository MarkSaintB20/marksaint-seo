import Header from "@/components/Header";
import RotatingHero from "@/components/RotatingHero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Cases from "@/components/Cases";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        <RotatingHero />
        <Services />
        <Methodology />
        <Cases />
        <About />
        <SocialProof />
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
}
