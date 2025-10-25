import { motion } from 'framer-motion';

interface AndroidCapabilitiesCardProps {
  isActive: boolean;
}

export function AndroidCapabilitiesCard({ isActive }: AndroidCapabilitiesCardProps) {
  const capabilities = [
    {
      icon: "🎯",
      title: "Strategy",
      skills: ["Brand Strategy", "Market Research", "Positioning"]
    },
    {
      icon: "🎨",
      title: "Design",
      skills: ["Visual Identity", "UI/UX Design", "Print Design"]
    },
    {
      icon: "💻",
      title: "Development",
      skills: ["Web Development", "Mobile Apps", "E-commerce"]
    },
    {
      icon: "📈",
      title: "Marketing",
      skills: ["Digital Marketing", "Content Strategy", "SEO"]
    }
  ];

  return (
    <div className="android-capabilities-card">
      <motion.div
        className="android-capabilities-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="android-capabilities-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="android-capabilities-title">Our Capabilities</h2>
          <p className="android-capabilities-subtitle">What we do best</p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="android-capabilities-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="android-capability-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="android-capability-icon">{capability.icon}</div>
              <h3 className="android-capability-title">{capability.title}</h3>
              <div className="android-capability-skills">
                {capability.skills.map((skill, skillIndex) => (
                  <span key={skill} className="android-capability-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="android-capabilities-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <button className="android-btn">Start a Project</button>
        </motion.div>
      </motion.div>
    </div>
  );
}