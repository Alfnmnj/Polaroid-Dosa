import { motion } from 'framer-motion';

interface AndroidTestimonialsSectionProps {
  id: string;
}

export function AndroidTestimonialsSection({ id }: AndroidTestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      company: "TechFlow Solutions",
      avatar: "👩‍💼",
      rating: 5,
      text: "Polaroid Dosa transformed our brand identity completely. Their strategic approach and creative execution exceeded all expectations.",
      color: "#FF6B35"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoLife",
      company: "EcoLife Products",
      avatar: "👨‍🌱",
      rating: 5,
      text: "The marketing campaign they created for us increased our brand awareness by 300%. Absolutely phenomenal work!",
      color: "#34C759"
    },
    {
      name: "Emma Rodriguez",
      role: "Creative Director",
      company: "Artisan Marketplace",
      avatar: "👩‍🎨",
      rating: 5,
      text: "Working with Polaroid Dosa was a game-changer. They understood our vision and brought it to life beautifully.",
      color: "#007AFF"
    },
    {
      name: "David Park",
      role: "Product Manager",
      company: "FoodieHub",
      avatar: "👨‍🍳",
      rating: 5,
      text: "Their mobile app design expertise helped us create an intuitive user experience that our customers love.",
      color: "#FF9500"
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
        What Our{' '}
        <span style={{ color: 'var(--android-primary)' }}>Clients Say</span>
      </motion.h2>
      
      <motion.p 
        className="android-section-subtitle android-text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Real feedback from real clients who've experienced our work
      </motion.p>

      <div className="android-scroll-container">
        <div className="android-scroll-content">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="android-scroll-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ width: '300px' }}
            >
              <motion.div
                className="android-testimonial-card"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'var(--android-blur)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--android-radius)',
                  padding: 'var(--android-spacing-large)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute',
                  top: 'var(--android-spacing)',
                  right: 'var(--android-spacing)',
                  fontSize: '2rem',
                  opacity: 0.1,
                  color: testimonial.color
                }}>
                  "
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: 'var(--android-spacing)'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                      viewport={{ once: true }}
                      style={{
                        color: '#FFD700',
                        fontSize: '1rem'
                      }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--android-light)',
                  lineHeight: '1.6',
                  marginBottom: 'var(--android-spacing-large)',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--android-spacing)'
                }}>
                  <motion.div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: testimonial.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--android-light)',
                      marginBottom: '2px',
                      lineHeight: '1.2'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      fontSize: '0.8rem',
                      color: testimonial.color,
                      fontWeight: '500',
                      margin: 0,
                      lineHeight: '1.2'
                    }}>
                      {testimonial.role}
                    </p>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'var(--android-gray)',
                      margin: 0,
                      lineHeight: '1.2'
                    }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${testimonial.color}, transparent)`
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}