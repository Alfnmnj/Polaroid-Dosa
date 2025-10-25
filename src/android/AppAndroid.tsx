import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AndroidHeader } from './components/AndroidHeader';
import { AndroidHeroSection } from './components/AndroidHeroSection';
import { AndroidAboutSection } from './components/AndroidAboutSection';
import { AndroidProjectsSection } from './components/AndroidProjectsSection';
import { AndroidCapabilitiesSection } from './components/AndroidCapabilitiesSection';
import { AndroidTeamSection } from './components/AndroidTeamSection';
import { AndroidFooter } from './components/AndroidFooter';
import { handleAndroidRouting } from './utils/deviceDetection';
import { initializeImagePreloading } from '../utils/globalImagePreloader';
import DarkVeil from '../components/DarkVeil';
import '../components/DarkVeil.css';
import './android.css';

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

export function AppAndroid() {
  const [isVisible, setIsVisible] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setWebGLSupported(supportsWebGL());
    handleAndroidRouting();
    
    // Initialize image preloading
    initializeImagePreloading();
  }, []);

  return (
    <div className="android-app">
      {/* DarkVeil Background - Disabled for cleaner cream background */}
      {false && webGLSupported && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}>
          <DarkVeil 
            speed={0.8}
            resolutionScale={0.3}
            noiseIntensity={0.01}
            scanlineIntensity={0}
            warpAmount={0.05}
            backgroundColor={[0.99, 0.96, 0.88]}
            auroraColor={[0.976, 0.659, 0.145]}
            sunbeamColor={[1.0, 0.98, 0.92]}
            luminance={1.0}
          />
        </div>
      )}

      {/* Enhanced CSS Fallback Background - Always present, higher z-index when WebGL not supported */}
      <div 
        className="android-bg-fallback" 
        style={{ zIndex: webGLSupported ? -1 : -2 }} 
      />

      {/* Main Content - Same structure as web but mobile optimized */}
      <motion.div 
        className="android-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header - Same as web but mobile optimized */}
        <AndroidHeader />

        {/* Hero Section - Same content as web */}
        <AndroidHeroSection />

        {/* About Section - Same content as web */}
        <AndroidAboutSection />

        {/* Projects Section - Same content as web */}
        <AndroidProjectsSection />

        {/* Capabilities Section - Same content as web */}
        <AndroidCapabilitiesSection />

        {/* Team Section - Same content as web */}
        <AndroidTeamSection />

        {/* Footer - Same content as web */}
        <AndroidFooter />
      </motion.div>
    </div>
  );
}

export default AppAndroid;