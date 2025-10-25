import { motion } from 'framer-motion';

interface AndroidAboutCardProps {
  isActive: boolean;
}

export function AndroidAboutCard({ isActive }: AndroidAboutCardProps) {
  const stats = [
    { number: "50+", label: "Projects" },
    { number: "25+", label: "Clients" },
    { number: "3+", label: "Years" },
  ];

  return (
    <div className="android-about-card">
      <motion.div
        className="android-about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <motion.div
          className="android-about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="android-about-title">About Polaroid Dosa</h2>
          <div className="android-about-subtitle">Creative Agency</div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="android-about-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="android-about-text">
            We're a creative agency that specializes in brewing brands to perfection. 
            Our team combines strategic thinking with creative execution to deliver 
            exceptional results for our clients.
          </p>
          <p className="android-about-text">
            From brand identity to digital experiences, we craft solutions that 
            resonate with your audience and drive meaningful engagement.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="android-stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="android-stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.8 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
            >
              <div className="android-stat-number">{stat.number}</div>
              <div className="android-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="android-about-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <button className="android-btn">Learn More</button>
        </motion.div>
      </motion.div>
    </div>
  );
}