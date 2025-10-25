import { useState, useEffect } from 'react';

// Mobile-optimized smooth hover effects with micro-interactions
const androidCapabilityCardStyles = `
  .android-capability-card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    backface-visibility: hidden;
    transform: translateZ(0) scale(1);
    position: relative;
    overflow: hidden;
  }
  
  .android-capability-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease-out;
    border-radius: 24px;
    z-index: 1;
  }
  
  .android-capability-card:active {
    transform: translateZ(0) scale(0.95);
    box-shadow: 
      0 15px 30px -8px rgba(245, 153, 34, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .android-capability-card:active::before {
    opacity: 1;
  }
  
  .android-capability-card .card-overlay {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    transform: scale(1.1);
  }
  
  .android-capability-card:active .card-overlay {
    opacity: 1;
    transform: scale(1);
  }
  
  .android-capability-card .card-icon {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateZ(0) scale(1) rotate(0deg);
  }
  
  .android-capability-card:active .card-icon {
    transform: translateZ(0) scale(1.1) rotate(5deg);
  }
  
  .android-capability-card .card-content {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateY(0);
  }
  
  .android-capability-card:active .card-content {
    transform: translateY(-2px);
  }
  
  .android-capability-card .card-title {
    transition: all 0.3s ease-out;
    position: relative;
  }
  
  .android-capability-card .card-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFE082, #FFF176);
    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 1px;
  }
  
  .android-capability-card:active .card-title::after {
    width: 100%;
  }
  
  .android-capability-card .card-description {
    transition: all 0.3s ease-out;
    opacity: 0.9;
  }
  
  .android-capability-card:active .card-description {
    opacity: 1;
    transform: translateY(-1px);
  }
  
  .android-capability-card .ripple-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }
  
  .android-capability-card:active .ripple-effect {
    width: 300px;
    height: 300px;
    opacity: 1;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .android-capability-card,
    .android-capability-card::before,
    .android-capability-card .card-overlay,
    .android-capability-card .card-icon,
    .android-capability-card .card-content,
    .android-capability-card .card-title,
    .android-capability-card .card-title::after,
    .android-capability-card .card-description,
    .android-capability-card .ripple-effect {
      transition: none !important;
    }
  }
`;

export function AndroidCapabilitiesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('android-capabilities-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    { 
      title: 'Branding', 
      icon: 'lightbulb',
      description: 'Strategic design builds a memorable and distinctive brand for every project.'
    },
    { 
      title: 'Graphic Design', 
      icon: 'brush',
      description: 'Capture the Graphic Essence and bring your message across the project.'
    },
    { 
      title: 'Web Design', 
      icon: 'language',
      description: 'Luxurious web interaction UI and UX design with modern design.'
    },
    { 
      title: 'Advertising', 
      icon: 'campaign',
      description: 'Thrive ideas, lift franchising and brand creating for any unique project.'
    },
    { 
      title: 'Editorial Design', 
      icon: 'menu_book',
      description: 'Elegant Content creation and print media for Marketing project.'
    },
    { 
      title: 'Digital Marketing', 
      icon: 'trending_up',
      description: 'Strategic Digital marketing and brand creation for Marketing project.'
    },
    { 
      title: 'Visual Storytelling', 
      icon: 'visibility',
      description: 'Creative visual narratives that connect and engage your audience.'
    },
    { 
      title: 'Packaging', 
      icon: 'inventory_2',
      description: 'Innovative packaging design that stands out on shelves and online.'
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: androidCapabilityCardStyles }} />
      <section 
        id="android-capabilities-section"
        className="scroll-optimized py-16 px-0 mb-16"
      >
      <div className="max-w-[1400px] mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="text-7xl font-bold mb-2 leading-tight"
            style={{
              fontWeight: "900",
              fontSize: "clamp(2rem, 6.5vw, 3.5rem)",
              lineHeight: "0.98",
              letterSpacing: "-0.02em",
              color: "#0f0f10",
              fontFamily: "Bricolage Grotesque, sans-serif",
            }}
          >
            Our Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-justify">
            Explore the Diverse Capabilities Our Team Brings to Every Project
          </p>
        </div>

        {/* Capabilities Horizontal Scroll - Mobile optimized */}
        <div 
          className={`android-capabilities-scroll transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`android-capability-card hover-optimized group relative rounded-3xl cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                backgroundColor: '#F59922',
                width: '180px',
                height: '180px',
                padding: '16px',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                background: `
                  linear-gradient(145deg, #F59922 0%, #E8890B 100%),
                  radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Icon - Positioned to top-right */}
              <div style={{ 
                position: 'absolute', 
                top: '12px', 
                right: '12px', 
                zIndex: 10 
              }} className="card-icon">
                <span className="material-icons text-white opacity-95" style={{
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}>
                  {capability.icon}
                </span>
              </div>
              
              {/* Content Container - Structured layout */}
              <div className="card-content h-full flex flex-col" style={{ 
                zIndex: 2, 
                position: 'relative'
              }}>
                {/* Title - Fixed position at top */}
                <div style={{ 
                  position: 'absolute',
                  top: '12px',
                  left: '0',
                  right: '50px'
                }}>
                  <h3 className="card-title text-white text-left" style={{ 
                    fontSize: '0.85rem',
                    lineHeight: '1.2',
                    fontFamily: 'Bricolage Grotesque, sans-serif',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    margin: 0
                  }}>
                    {capability.title}
                  </h3>
                </div>
                
                {/* Description - Positioned to allow flow under icon with more spacing */}
                <div style={{
                  position: 'absolute',
                  top: '50px',
                  left: '0',
                  right: '0',
                  bottom: '12px'
                }}>
                  <p className="card-description text-white text-left" style={{ 
                    fontSize: '0.7rem', 
                    lineHeight: '1.3',
                    fontFamily: 'Bricolage Grotesque, sans-serif',
                    fontWeight: '300',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    margin: 0
                  }}>
                    {capability.description}
                  </p>
                </div>
              </div>
              
              {/* Ripple effect for premium interaction */}
              <div className="ripple-effect"></div>
              
              {/* Enhanced overlay with gradient animation */}
              <div className="card-overlay absolute inset-0 rounded-3xl pointer-events-none" style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 224, 130, 0.15) 0%, 
                    rgba(255, 183, 77, 0.1) 25%,
                    rgba(255, 152, 0, 0.08) 50%,
                    rgba(230, 81, 0, 0.1) 75%,
                    rgba(191, 54, 12, 0.15) 100%
                  ),
                  radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                `
              }}></div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="android-capabilities-scroll-indicator">
          <span>Swipe to see all capabilities</span>
          <span style={{ color: '#F59922' }}>→</span>
        </div>
      </div>
    </section>
    </>
  );
}