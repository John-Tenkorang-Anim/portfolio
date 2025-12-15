import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "24+", label: "Projects Built" },
    { number: "10+", label: "Technologies" },
    { number: "4", label: "Certifications" },
    { number: "Inf", label: "Curiosity" },
  ]

  const interests = [
    "Machine Learning",
    "Cloud Architecture", 
    "Full Stack Dev",
    "System Design",
    "UI/UX Design",
    "DevOps"
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm <span className="highlight">John</span>, a passionate Computer Science student 
              at <span className="highlight">Cornell University</span> with a deep fascination for 
              building intelligent systems that make a real-world impact.
            </p>
            <p>
              My journey in tech started with curiosity about how things work, which evolved into 
              a love for creating enterprise-grade applications using modern tech stacks. I specialize 
              in bridging the gap between cutting-edge AI and practical business solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new AI research papers, contributing 
              to open-source projects, or architecting scalable cloud solutions. I believe in 
              continuous learning and pushing the boundaries of what's possible with technology.
            </p>
            <p>
              Currently based in <span className="highlight">Ithaca, New York</span>, I'm always 
              open to discussing innovative projects and collaboration opportunities.
            </p>

            <div className="about-interests">
              <h4>What I'm focused on:</h4>
              <ul className="interests-list">
                {interests.map((interest, index) => (
                  <motion.li 
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="interest-arrow">&#9654;</span>
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="profile-frame">
              <div className="profile-image">
                <div className="profile-placeholder">
                  <span className="profile-initials">JA</span>
                </div>
                <div className="profile-overlay" />
              </div>
              <div className="frame-corner frame-tl" />
              <div className="frame-corner frame-tr" />
              <div className="frame-corner frame-bl" />
              <div className="frame-corner frame-br" />
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-education"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="education-card">
            <div className="edu-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <div className="edu-content">
              <h4>Cornell University</h4>
              <p className="edu-degree">Bachelor of Science in Computer Science</p>
              <p className="edu-location">Ithaca, New York</p>
            </div>
            <div className="edu-status">
              <span className="status-badge">Current Student</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about-bg-decoration">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
      </div>
    </section>
  )
}

export default About
