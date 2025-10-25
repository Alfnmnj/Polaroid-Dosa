import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { OurProjects } from "./components/OurProjects";
import ContactSection from "./components/ContactSection";
import DarkVeil from "./components/DarkVeil";
import "./components/DarkVeil.css";
import { initializeImagePreloading } from "./utils/globalImagePreloader";

// WebGL detection utility
function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}

export default function App() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(supportsWebGL());
    
    // Initialize aggressive image preloading immediately
    initializeImagePreloading();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent', position: 'relative' }}>
      {/* Original DarkVeil Background - WebGL powered */}
      {webGLSupported && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}>
          <DarkVeil 
            speed={1.0}
            noiseIntensity={0.02}
            scanlineIntensity={0.1}
            warpAmount={0.1}
            backgroundColor={[0.99, 0.96, 0.88]}
            auroraColor={[0.976, 0.659, 0.145]}
            sunbeamColor={[1.0, 0.98, 0.92]}
            luminance={1.0}
          />
        </div>
      )}
      
      {/* Fallback background for non-WebGL browsers */}
      {!webGLSupported && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(135deg, #fcf7f0 0%, #f5ead6 25%, #fcf7f0 50%, #f0e6d2 75%, #fcf7f0 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease-in-out infinite',
          zIndex: -10 
        }} />
      )}
      
      {/* Content with relative positioning */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <OurProjects />
        <FeaturedPosts />
        <CapabilitiesSection />
        <ContactSection />
      </div>
    </div>
  );
}
