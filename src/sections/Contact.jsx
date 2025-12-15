import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open email client with form data
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    
    window.location.href = `mailto:ja857@cornell.edu?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    setFormStatus('Email client opened!')
    setTimeout(() => setFormStatus(''), 3000)
  }

  const contactLinks = [
    {
      name: 'Email',
      value: 'ja857@cornell.edu',
      href: 'mailto:ja857@cornell.edu',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      value: 'john-anim',
      href: 'https://linkedin.com/in/john-anim',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      value: 'John-Tenkorang-Anim',
      href: 'https://github.com/John-Tenkorang-Anim',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Location',
      value: 'Ithaca, NY',
      href: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05.</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </motion.div>

        <div className="contact-content">
          {/* Left Side - Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-subtitle">Let's Build Something Amazing</h3>
            <p className="contact-description">
              I'm always interested in hearing about new projects, creative ideas, 
              or opportunities to be part of something great. Whether you have a 
              question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  className="contact-link-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="link-icon">
                    {link.icon}
                  </div>
                  <div className="link-content">
                    <span className="link-label">{link.name}</span>
                    {link.href ? (
                      <a 
                        href={link.href} 
                        target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="link-value"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="link-value">{link.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div 
              className="availability-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <span className="availability-dot" />
              <span>Available for new opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Your name"
                  required
                />
                <span className="input-highlight" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="your@email.com"
                  required
                />
                <span className="input-highlight" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  required
                />
                <span className="input-highlight" />
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>

              {formStatus && (
                <motion.p 
                  className="form-status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="contact-decoration">
        <div className="deco-ring deco-ring-1" />
        <div className="deco-ring deco-ring-2" />
        <div className="deco-dots" />
      </div>
    </section>
  )
}

export default Contact
