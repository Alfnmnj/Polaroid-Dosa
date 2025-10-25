import { ArrowRight } from "lucide-react";
import CircularGallery from "./CircularGallery";
import { memo, useEffect } from 'react';
import { globalImagePreloader, ALL_PROJECT_IMAGES } from "../utils/globalImagePreloader";

export const OurProjects = memo(function OurProjects() {
  // Force preload images when component mounts
  useEffect(() => {
    globalImagePreloader.forcePreloadAll(ALL_PROJECT_IMAGES);
  }, []);

  const projects = [
    {
      image: `/assets/0001 (1).jpg`,
      text: "Creative Design 1",
    },
    {
      image: `/assets/0002 (1).jpg`,
      text: "Creative Design 2",
    },
    {
      image: `/assets/0003.jpg`,
      text: "Creative Design 3",
    },
    {
      image: `/assets/feastale-20251023-0001.jpg`,
      text: "Feastale Event",
    },
    {
      image: `/assets/launch poster.jpg`,
      text: "Launch Poster",
    },
    {
      image: `/assets/leadiedc-20251023-0001.jpg`,
      text: "Leadership Event 1",
    },
    {
      image: `/assets/leadiedc-20251023-0002.jpg`,
      text: "Leadership Event 2",
    },
    {
      image: `/assets/WhatsApp Image 2025-10-20 at 2.45.25 AM.jpeg`,
      text: "Brand Design 1",
    },
    {
      image: `/assets/WhatsApp Image 2025-10-20 at 3.00.25 AM.jpeg`,
      text: "Brand Design 2",
    },
    {
      image: `/assets/WhatsApp Image 2025-10-20 at 3.03.20 AM.jpeg`,
      text: "Brand Design 3",
    },
    {
      image: `/assets/White and Purple Modern Event Speaker List Instagram Post (1).jpg`,
      text: "Event Speaker List",
    },
    {
      image: `/assets/NEC.jpg`,
      text: "NEC Project",
    },
    {
      image: `/assets/obt.jpg`,
      text: "OBT Design",
    },
    {
      image: `/assets/placement.jpg`,
      text: "Placement Drive",
    },
    {
      image: `/assets/poster 1.jpg`,
      text: "Poster Design 1",
    },
    {
      image: `/assets/poster 2.jpg`,
      text: "Poster Design 2",
    },
    {
      image: `/assets/YRTS.jpg`,
      text: "YRTS Project",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24"
    >
      <div className="max-w-[1400px] mx-auto text-center mb-16 px-8">
        <h2
          className="text-black font-extrabold mb-6"
          style={{
            fontWeight: "900",
            fontSize: "clamp(1.75rem, 5.5vw, 3rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            color: "#0f0f10",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          Ideas are stirred like chutney, designs flipped like dosas
        </h2>

        <p
          className="text-xl"
          style={{
            color: "#4a4a4a",
            fontWeight: "500",
            lineHeight: "1.5",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          Let's Build Something Meaningful Together
        </p>
      </div>

      {/* 3D Circular Gallery */}
      <div
        style={{
          height: "600px",
          position: "relative",
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
        }}
      >
        <CircularGallery
          items={projects}
          bend={1.5}
          textColor="#0f0f10"
          borderRadius={0.08}
          scrollEase={0.1}
          scrollSpeed={1.2}
          font="bold 20px Bricolage Grotesque"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div
            className="text-[#4a4a4a] text-lg font-medium text-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Drag or scroll to explore
          </div>
          <ArrowRight className="w-4 h-4 text-[#f6a623] animate-pulse flex-shrink-0" />
        </div>
      </div>
    </section>
  );
});