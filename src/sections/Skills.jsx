import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "code",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 92 },
        { name: "Java", level: 85 },
        { name: "React/Next.js", level: 95 },
        { name: "Node.js", level: 90 },
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: "brain",
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "OpenCV", level: 82 },
        { name: "Scikit-learn", level: 90 },
        { name: "Pandas/NumPy", level: 92 },
        { name: "NLP", level: 80 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "cloud",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Linux", level: 88 },
        { name: "Git", level: 95 },
      ]
    },
    {
      title: "Databases & Tools",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 82 },
        { name: "Firebase", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 },
      ]
    }
  ]

  const techLogos = [
    "JavaScript", "TypeScript", "Python", "React", "Node.js", 
    "TensorFlow", "AWS", "Docker", "MongoDB", "PostgreSQL",
    "Git", "Linux", "Firebase", "Next.js", "Django"
  ]

  const getIcon = (type) => {
    switch(type) {
      case 'code':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        )
      case 'brain':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 9a3 3 0 0 0-3-3h-1a3 3 0 0 0 0 6h1a3 3 0 0 0 3-3Z" />
            <path d="M5 9a3 3 0 0 1 3-3h1a3 3 0 0 1 0 6H8a3 3 0 0 1-3-3Z" />
            <path d="M12 22a3 3 0 0 0 3-3v-1a3 3 0 0 0-6 0v1a3 3 0 0 0 3 3Z" />
            <path d="M18 14a3 3 0 0 0-3 3v1" />
            <path d="M6 14a3 3 0 0 1 3 3v1" />
          </svg>
        )
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        )
      case 'database':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14a9 3 0 0 0 18 0V5" />
            <path d="M3 12a9 3 0 0 0 18 0" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line" />
        </motion.div>

        {/* Tech Marquee */}
        <motion.div 
          className="tech-marquee"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="marquee-track">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <span key={index} className="marquee-item">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  {getIcon(category.icon)}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="certifications"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="cert-title">Professional Certifications</h3>
          <div className="cert-grid">
            {[
              { name: "AWS Solutions Architect", issuer: "Amazon Web Services", color: "#FF9900" },
              { name: "Google Cloud Developer", issuer: "Google Cloud Platform", color: "#4285F4" },
              { name: "TensorFlow Developer", issuer: "Google/TensorFlow", color: "#FF6F00" },
              { name: "Meta Front-End Developer", issuer: "Meta", color: "#0668E1" },
              { name: "Docker Certified Associate", issuer: "Docker Inc.", color: "#2496ED" },
            ].map((cert, index) => (
              <motion.div 
                key={cert.name}
                className="cert-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{ '--cert-color': cert.color }}
              >
                <div className="cert-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15l-2 5l9-11l-6-2l2-5l-9 11l6 2z" />
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="skills-bg">
        <div className="bg-gradient" />
      </div>
    </section>
  )
}

export default Skills
