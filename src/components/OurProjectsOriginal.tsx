import { ArrowRight } from "lucide-react";
import CircularGallery from "./CircularGallery";
import React, { memo, useRef } from 'react';

export const OurProjectsOriginal = memo(function OurProjectsOriginal() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      image: `/projects/0001 (1).jpg?v=${Date.now()}`,
      text: "Creative Design 1",
    },
    {
      image: `/projects/0002 (1).jpg?v=${Date.now()}`,
      text: "Creative Design 2",
    },
    {
      image: `/projects/0003.jpg?v=${Date.now()}`,
      text: "Creative Design 3",
    },
    {
      image: `/projects/feastale-20251023-0001.jpg?v=${Date.now()}`,
      text: "Feastale Event",
    },
    {
      image: `/projects/launch poster.jpg?v=${Date.now()}`,
      text: "Launch Poster",
    },
    {
      image: `/projects/leadiedc-20251023-0001.jpg?v=${Date.now()}`,
      text: "Leadership Event 1",
    },
    {
      image: `/projects/leadiedc-20251023-0002.jpg?v=${Date.now()}`,
      text: "Leadership Event 2",
    },
    {
      image: `/projects/WhatsApp Image 2025-10-20 at 2.45.25 AM.jpeg?v=${Date.now()}`,
      text: "Brand Design 1",
    },
    {
      image: `/projects/WhatsApp Image 2025-10-20 at 3.00.25 AM.jpeg?v=${Date.now()}`,
      text: "Brand Design 2",
    },
    {
      image: `/projects/WhatsApp Image 2025-10-20 at 3.03.20 AM.jpeg?v=${Date.now()}`,
      text: "Brand Design 3",
    },
    {
      image: `/projects/White and Purple Modern Event Speaker List Instagram Post (1).jpg?v=${Date.now()}`,
      text: "Event Speaker List",
    },
    {
      image: `/projects/NEC.jpg?v=${Date.now()}`,
      text: "NEC Project",
    },
    {
      image: `/projects/obt.jpg?v=${Date.now()}`,
      text: "OBT Design",
    },
    {
      image: `/projects/placement.jpg?v=${Date.now()}`,
      text: "Placement Drive",
    },
    {
      image: `/projects/poster 1.jpg?v=${Date.now()}`,
      text: "Poster Design 1",
    },
    {
      image: `/projects/poster 2.jpg?v=${Date.now()}`,
      text: "Poster Design 2",
    },
    {
      image: `/projects/YRTS.jpg?v=${Date.now()}`,
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