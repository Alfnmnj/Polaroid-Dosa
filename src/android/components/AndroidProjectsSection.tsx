import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export function AndroidProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    { image: `/assets/0001 (1).jpg`, text: "Creative Design 1" },
    { image: `/assets/0002 (1).jpg`, text: "Creative Design 2" },
    { image: `/assets/0003.jpg`, text: "Creative Design 3" },
    { image: `/assets/feastale-20251023-0001.jpg`, text: "Feastale Event" },
    { image: `/assets/launch poster.jpg`, text: "Launch Poster" },
    { image: `/assets/leadiedc-20251023-0001.jpg`, text: "Leadership Event 1" },
    { image: `/assets/leadiedc-20251023-0002.jpg`, text: "Leadership Event 2" },
    { image: `/assets/WhatsApp Image 2025-10-20 at 2.45.25 AM.jpeg`, text: "Brand Design 1" },
    { image: `/assets/WhatsApp Image 2025-10-20 at 3.00.25 AM.jpeg`, text: "Brand Design 2" },
    { image: `/assets/WhatsApp Image 2025-10-20 at 3.03.20 AM.jpeg`, text: "Brand Design 3" },
    { image: `/assets/White and Purple Modern Event Speaker List Instagram Post (1).jpg`, text: "Event Speaker List" },
    { image: `/assets/NEC.jpg`, text: "NEC Project" },
    { image: `/assets/obt.jpg`, text: "OBT Design" },
    { image: `/assets/placement.jpg`, text: "Placement Drive" },
    { image: `/assets/poster 1.jpg`, text: "Poster Design 1" },
    { image: `/assets/poster 2.jpg`, text: "Poster Design 2" },
    { image: `/assets/YRTS.jpg`, text: "YRTS Project" }
  ];

  // Intersection observer - show content immediately
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="android-projects" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="android-projects-title">
          Ideas are stirred like chutney, designs flipped like dosas
        </h2>
        
        <p className="android-projects-subtitle">
          Let's Build Something Meaningful Together
        </p>

        {/* Horizontal Scrolling Projects - Original simple design */}
        <div className="android-projects-scroll">
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="android-project-item"
            >
              <div className="android-project-image-container">
                <img 
                  src={project.image} 
                  alt={project.text}
                  className="android-project-image"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    willChange: 'auto',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                  onError={(e) => {
                    // Fallback for failed images
                    const img = e.target as HTMLImageElement;
                    img.style.background = '#f0f0f0';
                    img.style.display = 'block';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="android-projects-scroll-indicator">
          <span>Swipe to explore</span>
          <span style={{ color: '#F59922' }}>→</span>
        </div>
      </motion.div>
    </section>
  );
}