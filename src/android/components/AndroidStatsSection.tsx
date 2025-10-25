import { motion } from 'framer-motion';

export function AndroidStatsSection() {
  const stats = [
    { number: "50+", label: "Projects" },
    { number: "25+", label: "Clients" },
    { number: "3+", label: "Years" }
  ];

  const dots = Array.from({ length: 6 }, (_, i) => i);

  return (
    <motion.section 
      className="android-stats"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 
        className="android-stats-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our Impact
      </motion.h2>
      
      <div className="android-stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="android-stat-item"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2 + (index * 0.05),
              type: "spring",
              stiffness: 300
            }}
            viewport={{ once: true }}
          >
            <div className="android-stat-number">{stat.number}</div>
            <div className="android-stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="android-stats-dots"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {dots.map((_, index) => (
          <motion.div
            key={index}
            className={`android-stats-dot ${index === 2 ? 'active' : ''}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 + (index * 0.02) }}
            viewport={{ once: true }}
          />
        ))}
      </motion.div>
      
      <motion.div
        className="android-stats-brand"
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        ONAM
      </motion.div>
    </motion.section>
  );
}