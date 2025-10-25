import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function AndroidHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  const services = [
    { icon: "psychology", title: "Brand Strategy & Identity" },
    { icon: "brush", title: "Design & Visual Communication" },
    { icon: "rocket_launch", title: "Integrated Marketing Campaigns" },
    { icon: "auto_awesome", title: "Innovative Solutions" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="android-hero-redesigned">
      {/* Background Elements */}
      <div className="android-hero-bg-elements">
        <div className="android-hero-bg-circle android-hero-bg-circle-1"></div>
        <div className="android-hero-bg-circle android-hero-bg-circle-2"></div>
        <div className="android-hero-bg-gradient"></div>
      </div>

      <div className="android-hero-content-redesigned">
        {/* Main Content Container */}
        <div className="android-hero-main">
          {/* Greeting Badge */}
          <motion.div
            className="android-hero-greeting-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="android-hero-greeting-dot"></div>
            <span>Here We're</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="android-hero-title-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="android-hero-title-redesigned">
              <span className="android-hero-title-line">Brewing Brands</span>
              <span className="android-hero-title-line android-hero-title-accent">to Perfection</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div 
            className="android-hero-tagline-redesigned"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="android-hero-tagline-title-redesigned">
              Great work should feel invisible.
            </h2>
            <p className="android-hero-tagline-text-redesigned">
              From perfect imagery to compelling brands, crafted to connect and convert
            </p>
          </motion.div>


        </div>

        {/* Services Grid - Redesigned */}
        <motion.div 
          className="android-hero-services-redesigned"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="android-hero-services-header">
            <h3>What We Do</h3>
            <div className="android-hero-services-line"></div>
          </div>
          
          <div className="android-hero-services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="android-hero-service-redesigned"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="android-hero-service-icon-redesigned">
                  <span className="material-icons">
                    {service.icon}
                  </span>
                </div>
                <div className="android-hero-service-content">
                  <h4 className="android-hero-service-title-redesigned">{service.title}</h4>
                  <div className="android-hero-service-indicator">
                    <span className="material-icons">trending_up</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}