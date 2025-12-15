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
      company: "Microsoft",
      role: "Software Engineer Intern · CoreAI",
      period: "Nov 2025 - Present",
      location: "Remote",
      color: "#00FFFF", // Cyan
      description: [
        "Incoming SWE intern, CoreAI team, summer 2026",
        "Working on cutting-edge AI infrastructure and core AI systems",
        "Collaborating with Microsoft's CoreAI division on next-generation intelligent applications"
      ],
      tech: ["Python", "AI/ML", "Cloud Computing", "Azure"]
    },
    {
      id: 1,
      company: "Carmauto",
      role: "Software Engineer Intern",
      period: "May 2025 - Aug 2025",
      location: "Remote",
      color: "#FF1493", // Pink
      description: [
        "Built a cross-platform calendar sync system (Node.js, React, Google/Outlook APIs) to streamline mechanic scheduling",
        "Improved efficiency with real-time updates and resolved bugs to strengthen code reliability",
        "Collaborated with engineers using Git workflows and code reviews to ship scalable features",
        "Delivered production-ready features that enhanced operational workflow"
      ],
      tech: ["Node.js", "React.js", "Next.js", "Express.js", "Google APIs", "Outlook APIs"]
    },
    {
      id: 2,
      company: "AI4ALL",
      role: "AI/ML Ignite Fellow",
      period: "Apr 2025 - Oct 2025",
      location: "Remote",
      color: "#9D4EDD", // Purple
      description: [
        "5–6 month accelerator program developing the next generation of ethical AI professionals",
        "13 weeks of hands-on AI/ML project development followed by 7 weeks of career readiness training",
        "Collaborated in teams to design, build, and deploy machine learning models across the full project lifecycle",
        "Integrated technical training with discussions on ethical AI, focusing on responsible practices and societal impact",
        "Received career support, including interview preparation, mentorship, and networking with industry professionals"
      ],
      tech: ["Machine Learning", "XGBoost", "Regression Modeling", "Feature Engineering", "Ethical AI"]
    },
    {
      id: 3,
      company: "Cornell AppDev",
      role: "Backend Developer · Hackathon",
      period: "Apr 2025 - May 2025",
      location: "Ithaca, NY",
      color: "#39FF14", // Green
      description: [
        "Built and deployed RESTful API endpoints with Flask and SQLAlchemy for a language pairing app",
        "Configured a Google Cloud VM instance, containerized services with Docker, and published for scalable deployment",
        "Optimized database queries to handle concurrent users with sub-second response times",
        "Authored clear API documentation covering 15 endpoints to streamline frontend–backend integration"
      ],
      tech: ["Flask", "SQLAlchemy", "Docker", "GCP", "RESTful APIs", "PostgreSQL"]
    },
    {
      id: 4,
      company: "NVIDIA",
      role: "Summer Bridge Experience",
      period: "Jun 2025 - Aug 2025",
      location: "Remote",
      color: "#FFFF00", // Yellow
      description: [
        "Participated in NVIDIA Summer Bridge, engaging with professionals across software and hardware engineering",
        "Gained insights into NVIDIA's innovative culture and diverse engineering roles",
        "Attended career development sessions, including resume building and industry guidance",
        "Expanded professional network through meaningful conversations with NVIDIA engineers and recruiters"
      ],
      tech: ["CUDA", "Software Engineering", "GPU Computing", "Networking"]
    },
    {
      id: 5,
      company: "CodePath",
      role: "Technical Interview Prep Student",
      period: "May 2025 - Aug 2025",
      location: "Remote",
      color: "#FF00FF", // Magenta
      description: [
        "Enrolled in a 12-week intensive Technical Interview Prep program for software engineering roles",
        "Practiced advanced data structures and algorithms through hands-on coding challenges",
        "Strengthened problem-solving skills and time complexity analysis",
        "Participated in mock technical interviews to simulate real-world scenarios",
        "Gained strategies to optimize coding efficiency and improve interview performance"
      ],
      tech: ["Python", "Data Structures", "Algorithms", "System Design", "Technical Interviews"]
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
              <motion.button
                key={exp.id}
                className={`exp-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="tab-indicator"
                  style={{ background: exp.color }}
                  animate={{
                    scaleY: activeTab === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {exp.company}
              </motion.button>
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
                    style={{ '--exp-color': exp.color }}
                  >
                    <motion.h3
                      className="exp-role"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {exp.role} <span className="exp-at">@</span>{' '}
                      <span className="exp-company">{exp.company}</span>
                    </motion.h3>
                    
                    <motion.div
                      className="exp-meta"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
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
                    </motion.div>

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

                    <motion.div
                      className="exp-tech"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + exp.description.length * 0.1 }}
                    >
                      {exp.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="tech-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + exp.description.length * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
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
          style={{ '--exp-color': experiences[activeTab]?.color }}
        >
          <div className="timeline-line" />
          <div className="timeline-dot timeline-dot-1" />
          <div className="timeline-dot timeline-dot-2" />
          <div className="timeline-dot timeline-dot-3" />
        </motion.div>
      </div>

      {/* Background */}
      <div className="experience-bg">
        <motion.div
          className="bg-circle"
          animate={{
            background: `radial-gradient(circle, ${experiences[activeTab]?.color}15 0%, transparent 70%)`
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  )
}

export default Experience
