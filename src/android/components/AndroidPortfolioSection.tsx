import { motion } from 'framer-motion';
import { useState } from 'react';

interface AndroidPortfolioSectionProps {
  id: string;
}

export function AndroidPortfolioSection({ id }: AndroidPortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "TechFlow Branding",
      category: "Brand Identity",
      description: "Complete brand overhaul for a fintech startup, including logo design, color palette, and brand guidelines.",
      image: "🚀",
      color: "#FF6B35",
      tags: ["Branding", "Logo Design", "Guidelines"]
    },
    {
      title: "EcoLife Campaign",
      category: "Marketing Campaign",
      description: "Multi-channel sustainability campaign that increased brand awareness by 300% in 6 months.",
      image: "🌱",
      color: "#34C759",
      tags: ["Campaign", "Social Media", "Sustainability"]
    },
    {
      title: "Artisan Marketplace",
      category: "Digital Design",
      description: "E-commerce platform design focusing on showcasing handmade products with beautiful photography.",
      image: "🎨",
      color: "#007AFF",
      tags: ["UI/UX", "E-commerce", "Photography"]
    },
    {
      title: "FoodieHub App",
      category: "Mobile Design",
      description: "Restaurant discovery app with intuitive navigation and personalized recommendations.",
      image: "🍕",
      color: "#FF9500",
      tags: ["Mobile App", "UX Design", "Food Tech"]
    },
    {
      title: "Wellness Retreat",
      category: "Event Branding",
      description: "Complete event identity for a luxury wellness retreat, from invitations to signage.",
      image: "🧘",
      color: "#AF52DE",
      tags: ["Event Design", "Print", "Luxury"]
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
        Our Latest{' '}
        <span style={{ color: 'var(--android-primary)' }}>Work</span>
      </motion.h2>
      
      <motion.p 
        className="android-section-subtitle android-text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Projects that showcase our commitment to creative excellence
      </motion.p>

      <div className="android-scroll-container">
        <div className="android-scroll-content">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="android-scroll-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ width: '300px' }}
            >
              <motion.div
                className="android-project-card"
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'var(--android-blur)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--android-radius)',
                  padding: 'var(--android-spacing-large)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Project Image/Icon */}
                <motion.div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--android-radius)',
                    background: project.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: 'var(--android-spacing)',
                    boxShadow: `0 8px 24px ${project.color}40`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image}
                </motion.div>

                {/* Project Info */}
                <div style={{ marginBottom: 'var(--android-spacing)' }}>
                  <div style={{
                    fontSize: '0.8rem',
                    color: project.color,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    {project.category}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--android-light)',
                    marginBottom: 'var(--android-spacing-small)',
                    lineHeight: '1.2'
                  }}>
                    {project.title}
                  </h3>
                  
                  <motion.p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--android-gray)',
                      lineHeight: '1.5',
                      margin: 0,
                      overflow: 'hidden'
                    }}
                    animate={{
                      height: selectedProject === index ? 'auto' : '0px',
                      opacity: selectedProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Tags */}
                <motion.div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    overflow: 'hidden'
                  }}
                  animate={{
                    height: selectedProject === index ? 'auto' : '0px',
                    opacity: selectedProject === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--android-light)',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Expand Indicator */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 'var(--android-spacing)',
                    right: 'var(--android-spacing)',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: project.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: 'white'
                  }}
                  animate={{
                    rotate: selectedProject === index ? 45 : 0
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