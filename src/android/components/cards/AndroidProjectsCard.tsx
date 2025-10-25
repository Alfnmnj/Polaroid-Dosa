import { motion } from 'framer-motion';

interface AndroidProjectsCardProps {
  isActive: boolean;
}

export function AndroidProjectsCard({ isActive }: AndroidProjectsCardProps) {
  const projects = [
    {
      title: "Brand Identity",
      category: "Design",
      color: "#F59922",
      description: "Complete brand overhaul for tech startup"
    },
    {
      title: "Web Platform",
      category: "Development",
      color: "#2561F9",
      description: "E-commerce platform with custom CMS"
    },
    {
      title: "Marketing Campaign",
      category: "Strategy",
      color: "#10B981",
      description: "Multi-channel campaign for product launch"
    }
  ];

  return (
    <div className="android-projects-card">
      <motion.div
        className="android-projects-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="android-projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="android-projects-title">Our Projects</h2>
          <p className="android-projects-subtitle">Recent work that we're proud of</p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          className="android-projects-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="android-project-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.1)
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="android-project-indicator"
                style={{ backgroundColor: project.color }}
              />
              <div className="android-project-content">
                <div className="android-project-header">
                  <h3 className="android-project-title">{project.title}</h3>
                  <span 
                    className="android-project-category"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="android-project-description">{project.description}</p>
              </div>
              <div className="android-project-arrow">→</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="android-projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <button className="android-btn-secondary">View All Projects</button>
        </motion.div>
      </motion.div>
    </div>
  );
}