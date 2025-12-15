import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      id: 0,
      company: "Cornell University",
      role: "Student Developer & Researcher",
      period: "2024 - Present",
      location: "Ithaca, NY",
      description: [
        "Pursuing Bachelor's in Computer Science with focus on AI/ML and distributed systems",
        "Building enterprise-grade applications using modern tech stacks including React, Node.js, and Python",
        "Developing AI-powered solutions for real-world applications",
        "Collaborating with peers on innovative technical projects and research initiatives"
      ],
      tech: ["Python", "React", "TensorFlow", "AWS", "Docker"]
    },
    {
      id: 1,
      company: "Personal Projects",
      role: "Full Stack Developer & ML Engineer",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Developed Smart Expense Tracker using machine learning for expenditure prediction",
        "Built complete Pac-Man game with Java implementing graph algorithms for AI pathfinding",
        "Created Smart Grid Energy Forecast system for optimizing energy consumption patterns",
        "Designed and deployed scalable cloud solutions using AWS and Docker"
      ],
      tech: ["Java", "Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Open Source",
      role: "Contributor",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Contributing to various open-source ML and web development projects",
        "Building Machine Learning repositories showcasing neural networks and deep learning",
        "Creating SimuStack for distributed systems simulation and testing",
        "Maintaining comprehensive documentation and best practices"
      ],
      tech: ["Python", "Docker", "Git", "Linux", "CI/CD"]
    }
  ]

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="experience-container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04.</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </motion.div>

        <div className="experience-content">
          {/* Tabs */}
          <motion.div 
            className="experience-tabs"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={`exp-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-indicator" />
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <div className="experience-details">
            <AnimatePresence mode="wait">
              {experiences.map((exp, index) => (
                activeTab === index && (
                  <motion.div 
                    key={exp.id}
                    className="exp-panel"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="exp-role">
                      {exp.role} <span className="exp-at">@</span>{' '}
                      <span className="exp-company">{exp.company}</span>
                    </h3>
                    
                    <div className="exp-meta">
                      <span className="exp-period">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="exp-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>

                    <ul className="exp-description">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="exp-bullet">&#9656;</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="exp-tech">
                      {exp.tech.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline decoration */}
        <motion.div 
          className="timeline-decoration"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="timeline-line" />
          <div className="timeline-dot timeline-dot-1" />
          <div className="timeline-dot timeline-dot-2" />
          <div className="timeline-dot timeline-dot-3" />
        </motion.div>
      </div>

      {/* Background */}
      <div className="experience-bg">
        <div className="bg-circle" />
      </div>
    </section>
  )
}

export default Experience
