import { motion } from 'framer-motion';

interface AndroidContactCardProps {
  isActive: boolean;
}

export function AndroidContactCard({ isActive }: AndroidContactCardProps) {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@polaroiddosa.com",
      action: "mailto:hello@polaroiddosa.com"
    },
    {
      icon: "📱",
      title: "Instagram",
      value: "@polaroiddosa",
      action: "https://www.instagram.com/polaroiddosa"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "Chat with us",
      action: "https://wa.me/1234567890"
    }
  ];

  return (
    <div className="android-contact-card">
      <motion.div
        className="android-contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="android-contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="android-contact-title">Get in Touch</h2>
          <p className="android-contact-subtitle">Let's brew something amazing together</p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="android-contact-methods"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              className="android-contact-method"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.1)
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="android-contact-icon">{method.icon}</div>
              <div className="android-contact-info">
                <div className="android-contact-method-title">{method.title}</div>
                <div className="android-contact-value">{method.value}</div>
              </div>
              <div className="android-contact-arrow">→</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Message */}
        <motion.div
          className="android-contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="android-form-group">
            <input 
              type="text" 
              placeholder="Your name"
              className="android-input"
            />
          </div>
          <div className="android-form-group">
            <textarea 
              placeholder="Tell us about your project..."
              className="android-textarea"
              rows={3}
            />
          </div>
          <button className="android-btn android-btn-full">Send Message</button>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="android-contact-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="android-contact-note">
            We typically respond within 24 hours
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}