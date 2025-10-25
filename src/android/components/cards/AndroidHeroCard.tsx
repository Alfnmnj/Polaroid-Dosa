import { motion } from 'framer-motion';

interface AndroidHeroCardProps {
  isActive: boolean;
}

export function AndroidHeroCard({ isActive }: AndroidHeroCardProps) {
  const services = [
    { icon: "🧠", title: "Brand Strategy" },
    { icon: "🎨", title: "Visual Design" },
    { icon: "🚀", title: "Marketing" },
    { icon: "✨", title: "Innovation" },
  ];

  return (
    <div className="android-hero-card">
      <motion.div
        className="android-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main Title */}
        <motion.div
          className="android-hero-title-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="android-hero-greeting">Hey, We're</div>
          <h1 className="android-hero-title">
            Brewing Brands
            <br />
            to Perfection
          </h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="android-services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="android-service-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="android-service-icon">{service.icon}</div>
              <div className="android-service-title">{service.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="android-hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="android-tagline-title">Great work should feel invisible.</h2>
          <p className="android-tagline-text">
            From perfect imagery to compelling brands, crafted to connect and convert
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}