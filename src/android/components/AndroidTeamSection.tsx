import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export function AndroidTeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Team data with assets paths
  const teamMembers = [
    { 
      id: 1, 
      name: 'Risvi Chatterji', 
      position: 'Design Head', 
      image: `/assets/Risvi Chatterji.png?v=${Date.now()}`
    },
    { 
      id: 2, 
      name: 'Alfred T Manoj', 
      position: 'Creative Head', 
      image: `/assets/Alfred T Manoj.png?v=${Date.now()}`
    },
    { 
      id: 3, 
      name: 'Abhishankar S', 
      position: 'Social Media Manager', 
      image: `/assets/Abhishankar S.png?v=${Date.now()}`
    },
    { 
      id: 4, 
      name: 'Alfin T Manoj', 
      position: 'Web Designer', 
      image: `/assets/Alfin T Manoj.png?v=${Date.now()}`
    },
    { 
      id: 5, 
      name: 'Abhinandh K M', 
      position: 'Digital Marketing Head', 
      image: `/assets/Abhinandh K M.png?v=${Date.now()}`
    },
    { 
      id: 6, 
      name: 'Rakesh Ravi', 
      position: 'Data Analyst', 
      image: '/assets/Rakesh.png'
    }
  ];

  // Simple intersection observer
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="android-team" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="android-team-title">
          Meet Our Team
        </h2>

        {/* Team Grid - Original simple design */}
        <div className="android-team-scroll">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="android-team-member"
            >
              <div className="android-team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="android-team-image"
                  loading="eager"
                  decoding="async"
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="android-team-scroll-indicator">
          <span>Swipe to see all members</span>
          <span style={{ color: '#F59922' }}>→</span>
        </div>
      </motion.div>
    </section>
  );
}