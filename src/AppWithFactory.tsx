import { Suspense } from "react";
import { ComponentFactory } from "./components/ComponentFactory";
import DarkVeil from "./components/DarkVeil";
import "./styles/desktop-only.css";
import "./utils/mode-demo";

export default function AppWithFactory() {
  return (
    <div className="min-h-screen bg-background">
      {/* Universal Background - DarkVeil covering entire page */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <DarkVeil speed={1.0} />
      </div>
      
      {/* Content with relative positioning */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ComponentFactory component="Header" />
        <ComponentFactory component="HeroSection" />
        <ComponentFactory component="AboutSection" />
        <ComponentFactory component="OurProjects" />
        <ComponentFactory component="FeaturedPosts" />
        <ComponentFactory component="CapabilitiesSection" />
        <ComponentFactory component="Footer" />
      </div>
    </div>
  );
}