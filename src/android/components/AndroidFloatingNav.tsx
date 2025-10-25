import { motion, AnimatePresence } from 'framer-motion';

interface AndroidFloatingNavProps {
  sections: Array<{ id: string; name: string; icon: string }>;
  currentSection: number;
  onSectionClick: (index: number) => void;
  isVisible: boolean;
}

export function AndroidFloatingNav({ 
  sections, 
  currentSection, 
  onSectionClick, 
  isVisible 
}: AndroidFloatingNavProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={`android-floating-nav ${!isVisible ? 'hidden' : ''}`}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            delay: 1.5 
          }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`android-nav-item ${currentSection === index ? 'active' : ''}`}
              onClick={() => onSectionClick(index)}
              whileHover={{ scale: currentSection === index ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 1.7 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              title={section.name}
            >
              {section.icon}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}