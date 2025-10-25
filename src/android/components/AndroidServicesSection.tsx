import { motion } from 'framer-motion';
import { useState } from 'react';

interface AndroidServicesSectionProps {
  id: string;
}

export function AndroidServicesSection({ id }: AndroidServicesSectionProps) {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: "🎯",
      title: "Brand Strategy",
      shortDesc: "Strategic positioning & architecture",
      fullDesc: "We dive deep into your brand's core to develop comprehensive strategies that resonate with your target audience and drive business growth.",
      features: ["Market Research", "Brand Positioning", "Competitive Analysis", "Brand Architecture"],
      color: "#FF6B35",
      price: "From $5,000"
    },
    {
      icon: "🎨",
      title: "Visual Identity",
      shortDesc: "Distinctive visual systems",
      fullDesc: "Creating memorable visual identities that capture your brand's essence and stand out in crowded markets.",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
      color: "#F7931E",
      price: "From $3,000"
    },
    {
      icon: "📱",
      title: "Digital Design",
      shortDesc: "User-centered experiences",
      fullDesc: "Designing intuitive digital experiences that delight users and drive conversions across all platforms.",
      features: ["UI/UX Design", "Responsive Design", "Prototyping", "User Testing"],
      color: "#FFD23F",
      price: "From $4,000"
    },
    {
      icon: "📈",
      title: "Marketing Campaigns",
      shortDesc: "Integrated brand campaigns",
      fullDesc: "Multi-channel marketing campaigns that amplify your brand message and drive measurable results.",
      features: ["Campaign Strategy", "Content Creation", "Social Media", "Performance Tracking"],
      color: "#34C759",
      price: "From $2,500"
    },
    {
      icon: "🚀",
      title: "Brand Activation",
      shortDesc: "Experiential marketing",
      fullDesc: "Bringing brands to life through memorable experiences that create lasting connections with your audience.",
      features: ["Event Design", "Experiential Marketing", "Launch Campaigns", "Brand Experiences"],
      color: "#007AFF",
      price: "From $6,000"
    },
    {
      icon: "✨",
      title: "Creative Direction",
      shortDesc: "End-to-end leadership",
      fullDesc: "Comprehensive creative leadership for all your brand touchpoints, ensuring consistency and excellence.",
      features: ["Creative Strategy", "Art Direction", "Brand Consistency", "Quality Assurance"],
      color: "#AF52DE",
      price: "From $8,000"
    }
  ];

  return (
    <section id={id} className="android-section">
      <motion.h2 
        className="android-section-title android-text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Our{' '}
        <span style={{ color: 'var(--android-primary)' }}>Expertise</span>
      </motion.h2>
      
      <motion.p 
        className="android-section-subtitle android-text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Comprehensive solutions tailored to your brand's unique needs
      </motion.p>

      <div className="android-scroll-container">
        <div className="android-scroll-content">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="android-scroll-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ width: '320px' }}
            >
              <motion.div
                className="android-service-card"
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveService(activeService === index ? null : index)}
                style={{
                  background: activeService === index 
                    ? `linear-gradient(135deg, ${service.color}20, rgba(255, 255, 255, 0.05))`
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'var(--android-blur)',
                  border: activeService === index 
                    ? `2px solid ${service.color}` 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--android-radius)',
                  padding: 'var(--android-spacing-large)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  minHeight: '200px'
                }}
              >
                {/* Service Icon */}
                <motion.div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: 'var(--android-radius)',
                    background: service.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    marginBottom: 'var(--android-spacing)',
                    boxShadow: `0 8px 24px ${service.color}40`
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{
                    scale: activeService === index ? 1.1 : 1,
                    rotate: activeService === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Header */}
                <div style={{ marginBottom: 'var(--android-spacing)' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--android-light)',
                    marginBottom: 'var(--android-spacing-small)',
                    lineHeight: '1.2'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--android-gray)',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {service.shortDesc}
                  </p>
                </div>

                {/* Expanded Content */}
                <motion.div
                  style={{ overflow: 'hidden' }}
                  animate={{
                    height: activeService === index ? 'auto' : '0px',
                    opacity: activeService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--android-gray)',
                    lineHeight: '1.5',
                    marginBottom: 'var(--android-spacing)'
                  }}>
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: 'var(--android-spacing)' }}>
                    <h4 style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: service.color,
                      marginBottom: 'var(--android-spacing-small)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      What's Included
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px'
                    }}>
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          style={{
                            fontSize: '0.7rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'var(--android-light)',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontWeight: '500'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: service.color
                    }}>
                      {service.price}
                    </span>
                    <motion.button
                      style={{
                        background: service.color,
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </motion.div>

                {/* Expand Indicator */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 'var(--android-spacing)',
                    right: 'var(--android-spacing)',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: 'var(--android-light)'
                  }}
                  animate={{
                    rotate: activeService === index ? 45 : 0,
                    background: activeService === index ? service.color : 'rgba(255, 255, 255, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}