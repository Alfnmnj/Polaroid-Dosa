import { motion } from 'framer-motion';
import { useState } from 'react';

interface AndroidContactSectionProps {
  id: string;
}

export function AndroidContactSection({ id }: AndroidContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@polaroiddosa.com",
      action: "mailto:hello@polaroiddosa.com",
      color: "#FF6B35"
    },
    {
      icon: "📱",
      title: "Instagram",
      value: "@polaroiddosa",
      action: "https://www.instagram.com/polaroiddosa",
      color: "#E4405F"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "Chat with us",
      action: "https://wa.me/1234567890",
      color: "#25D366"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id={id} className="android-section">
      <motion.h2 
        className="android-section-title android-text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Let's{' '}
        <span style={{ color: 'var(--android-primary)' }}>Create Together</span>
      </motion.h2>
      
      <motion.p 
        className="android-section-subtitle android-text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Ready to brew your brand to perfection? Let's start the conversation.
      </motion.p>

      {/* Contact Methods */}
      <motion.div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--android-spacing)',
          marginBottom: 'var(--android-spacing-large)',
          flexWrap: 'wrap'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.action}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--android-spacing-small)',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'var(--android-blur)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--android-radius)',
              padding: 'var(--android-spacing)',
              textDecoration: 'none',
              color: 'var(--android-light)',
              transition: 'all 0.3s ease',
              minWidth: '200px'
            }}
            whileHover={{ 
              scale: 1.05,
              borderColor: method.color + '40'
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: method.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>
              {method.icon}
            </div>
            <div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '2px'
              }}>
                {method.title}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--android-gray)'
              }}>
                {method.value}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="android-card"
        style={{
          maxWidth: '500px',
          margin: '0 auto'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          color: 'var(--android-light)',
          marginBottom: 'var(--android-spacing)',
          textAlign: 'center'
        }}>
          Start Your Project
        </h3>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--android-spacing)' }}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: 'var(--android-spacing)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--android-radius-small)',
                color: 'var(--android-light)',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: 'var(--android-spacing)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--android-radius-small)',
                color: 'var(--android-light)',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <select
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: 'var(--android-spacing)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--android-radius-small)',
                color: 'var(--android-light)',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            >
              <option value="">Select Project Type</option>
              <option value="branding">Brand Identity</option>
              <option value="digital">Digital Design</option>
              <option value="marketing">Marketing Campaign</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
              style={{
                width: '100%',
                padding: 'var(--android-spacing)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--android-radius-small)',
                color: 'var(--android-light)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <motion.button
            type="submit"
            style={{
              background: 'var(--android-primary)',
              color: 'white',
              border: 'none',
              padding: 'var(--android-spacing) var(--android-spacing-large)',
              borderRadius: 'var(--android-radius)',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: 'var(--android-spacing-small)'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>

      {/* Footer */}
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: 'var(--android-spacing-large)',
          paddingTop: 'var(--android-spacing-large)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--android-gray)',
          marginBottom: 'var(--android-spacing-small)'
        }}>
          © 2024 Polaroid Dosa. All rights reserved.
        </p>
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--android-gray)',
          margin: 0
        }}>
          Brewing brands to perfection, one project at a time.
        </p>
      </motion.div>
    </section>
  );
}