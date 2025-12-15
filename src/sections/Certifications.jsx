import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Certifications.css'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      id: 0,
      title: "Intermediate Technical Interview Prep",
      issuer: "CodePath",
      date: "Aug 2025",
      certificateId: "120044",
      color: "#00D9FF",
      skills: ["Technical Interview Prep (TIP 102)", "Software Engineering Practices", "Python", "Data Structures", "Algorithms"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "Mar 2024",
      platform: "Coursera",
      color: "#4285F4",
      skills: ["Project Planning", "Risk Management", "Stakeholder Management", "Agile Methodologies", "Project Documentation"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    }
  ]

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="certifications-container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05.</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </motion.div>

        <motion.p
          className="certifications-intro"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional certifications demonstrating commitment to continuous learning and technical excellence.
        </motion.p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              style={{ '--cert-color': cert.color }}
              whileHover={{ y: -8 }}
            >
              <div className="cert-header">
                <motion.div
                  className="cert-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {cert.icon}
                </motion.div>
                <div className="cert-badge">
                  <span>Verified</span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <span className="issuer-name">{cert.issuer}</span>
                  {cert.platform && (
                    <>
                      <span className="issuer-separator">•</span>
                      <span className="issuer-platform">{cert.platform}</span>
                    </>
                  )}
                </div>
                <div className="cert-date">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Issued {cert.date}</span>
                </div>
                {cert.certificateId && (
                  <div className="cert-id">
                    <span>Certificate ID: {cert.certificateId}</span>
                  </div>
                )}
              </div>

              <div className="cert-skills">
                <h4 className="skills-label">Skills Acquired</h4>
                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="cert-glow" />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Background */}
      <div className="certifications-bg">
        <div className="bg-grid" />
        <div className="bg-gradient" />
      </div>
    </section>
  )
}

export default Certifications
