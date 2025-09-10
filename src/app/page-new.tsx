import { ParticleBackground } from '@/components/ParticleBackground';
import { GlassNavigation } from '@/components/GlassNavigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <GlassNavigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
