import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const roles = [
    "Full Stack Developer",
    "AI/ML Engineer", 
    "System Architect",
    "Cloud Expert"
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/John-Tenkorang-Anim', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/john-anim', icon: 'IN' },
    { name: 'Email', url: 'mailto:ja857@cornell.edu', icon: '@' },
  ]

  return (
    <section className="hero" ref={containerRef}>
      <motion.div 
        className="hero-content"
        style={{ y, opacity }}
      >
        {/* Greeting */}
        <motion.div
          className="hero-greeting"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <span className="greeting-line" />
          <span className="greeting-text">Hi, my name is</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <span className="title-name">John Tenkorang</span>
          <span className="title-surname">Anim<span className="title-dot">.</span></span>
        </motion.h1>

        {/* Role Typewriter */}
        <motion.div 
          className="hero-roles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
        >
          <span className="roles-static">I build</span>
          <div className="roles-dynamic">
            {roles.map((role, index) => (
              <span 
                key={role} 
                className="role-item"
                style={{ animationDelay: `${index * 3}s` }}
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.4 }}
        >
          A passionate Computer Science student at <span className="highlight">Cornell University</span> exploring 
          the intersections of AI, Machine Learning, and Full Stack Development. 
          Building intelligent systems that bridge cutting-edge technology with real-world solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.6 }}
        >
          <a href="#projects" className="cta-primary">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#contact" className="cta-secondary">
            <span>Get In Touch</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8 + index * 0.1 }}
            >
              <span className="social-icon">{link.icon}</span>
              <span className="social-name">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="hero-decoration">
        <div className="deco-circle deco-1" />
        <div className="deco-circle deco-2" />
        <div className="deco-circle deco-3" />
        <div className="deco-grid" />
      </div>

      {/* Code Block Decoration */}
      <motion.div 
        className="hero-code"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3.4 }}
      >
        <div className="code-header">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
          <span className="code-filename">developer.js</span>
        </div>
        <pre className="code-content">
          <code>
            <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
            {'\n'}  <span className="code-prop">name</span>: <span className="code-string">"John Anim"</span>,
            {'\n'}  <span className="code-prop">role</span>: <span className="code-string">"Full Stack + AI"</span>,
            {'\n'}  <span className="code-prop">location</span>: <span className="code-string">"Ithaca, NY"</span>,
            {'\n'}  <span className="code-prop">available</span>: <span className="code-bool">true</span>,
            {'\n'}  <span className="code-func">buildSomething</span>: () {'=>'} {'{'}
            {'\n'}    <span className="code-keyword">return</span> <span className="code-string">"🚀"</span>
            {'\n'}  {'}'}
            {'\n'}{'}'};
          </code>
        </pre>
      </motion.div>
    </section>
  )
}

export default Hero
