import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "MedLens AI",
      description: "Advanced medical imaging analysis powered by AI. Upload medical images and receive instant, accurate diagnostic insights using state-of-the-art deep learning models trained on extensive medical datasets.",
      image: null,
      tags: ["Python", "Deep Learning", "Computer Vision", "Hugging Face"],
      category: "ai",
      github: "https://huggingface.co/spaces/JohnnyGracious/medlens-ai",
      live: "https://huggingface.co/spaces/JohnnyGracious/medlens-ai",
      featured: true,
      isMajor: true,
      color: "#00FFFF"
    },
    {
      id: 2,
      title: "CodeDoc Analyst Pro",
      description: "Intelligent code documentation analyzer that transforms your codebase into comprehensive, interactive documentation. Features AI-powered code analysis, documentation generation, and real-time insights.",
      image: null,
      tags: ["Next.js", "TypeScript", "AI/ML", "Vercel"],
      category: "fullstack",
      github: "https://github.com/John-Tenkorang-Anim/codedoc-analyst-pro",
      live: "https://codedoc-analyst-pro.vercel.app/",
      featured: true,
      isMajor: true,
      color: "#FF1493"
    },
    {
      id: 3,
      title: "Smart Grid Energy Forecast",
      description: "California energy prediction system using machine learning to forecast electricity consumption patterns. Enables utilities to optimize resource allocation, reduce costs, and improve grid efficiency across California.",
      image: null,
      tags: ["Python", "ML", "Streamlit", "Data Science"],
      category: "ai",
      github: "https://github.com/John-Tenkorang-Anim/smart-grid-energy-forecast",
      live: "https://smart-grid-energy-forecast-a4vwwv3nehbrwzkju687i4.streamlit.app/",
      featured: true,
      isMajor: true,
      color: "#FFFF00"
    },
    {
      id: 4,
      title: "Smart Expense Tracker",
      description: "AI-powered expense tracking app that uses machine learning algorithms to predict expenditure patterns and help users make informed financial decisions.",
      image: null,
      tags: ["Python", "ML", "TensorFlow", "React"],
      category: "ai",
      github: "https://github.com/John-Tenkorang-Anim/Smart-Expense-Tracker",
      live: null,
      featured: true,
      isMajor: false,
      color: "#39FF14"
    },
    {
      id: 5,
      title: "Pac-Mann Game",
      description: "A complete Pac-Man game developed with Java and JSwing UI, implementing graph algorithms for ghost AI pathfinding and game mechanics.",
      image: null,
      tags: ["Java", "JSwing", "Graph Algorithms", "Game Dev"],
      category: "fullstack",
      github: "https://github.com/John-Tenkorang-Anim/Pac-Mann-Game",
      live: null,
      featured: true,
      isMajor: false,
      color: "#FF00FF"
    },
    {
      id: 6,
      title: "SimuStack",
      description: "A simulation stack framework for running and testing distributed systems locally, helping developers build reliable cloud-native applications.",
      image: null,
      tags: ["Python", "Docker", "Distributed Systems"],
      category: "devops",
      github: "https://github.com/John-Tenkorang-Anim/SimuStack",
      live: null,
      featured: false,
      isMajor: false,
      color: "#FFA500"
    },
    {
      id: 7,
      title: "Machine Learning Repos",
      description: "Collection of ML projects from simple neural networks to convolutional networks, showcasing various deep learning architectures and applications.",
      image: null,
      tags: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
      category: "ai",
      github: "https://github.com/John-Tenkorang-Anim/Machine-Learning-Repos",
      live: null,
      featured: false,
      isMajor: false,
      color: "#FF073A"
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const majorApps = projects.filter(p => p.isMajor)
  const otherProjects = filteredProjects.filter(p => !p.isMajor)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line" />
        </motion.div>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing production-ready applications and innovative AI/ML solutions.
          Each project represents a unique challenge and demonstrates real-world impact.
        </motion.p>

        {/* Major Apps Section */}
        <motion.div
          className="major-apps-section"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="subsection-title">
            <span className="title-icon">⭐</span>
            Major Applications
          </h3>
          <div className="major-apps-grid">
            {majorApps.map((project, index) => (
              <motion.article
                key={project.id}
                className="major-project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                style={{ '--project-color': project.color }}
              >
                <div className="major-card-badge">
                  <span>Live & Production</span>
                </div>

                <div className="major-card-content">
                  <h4 className="major-project-title">{project.title}</h4>
                  <p className="major-project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="major-card-actions">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="major-btn major-btn-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        View Live App
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="major-btn major-btn-secondary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="major-card-glow" />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Other Projects Section */}
        <motion.div
          className="other-projects-section"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="subsection-title">Other Projects</h3>

          {/* Filter Tabs */}
          <div className="project-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {otherProjects.map((project, index) => (
              <motion.article 
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
                style={{ '--project-color': project.color }}
              >
                {/* Project Header */}
                <div className="project-header">
                  <div className="project-folder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p className="project-description">{project.description}</p>
                </div>

                {/* Project Tags */}
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="project-glow" />
              </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* View More */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/John-Tenkorang-Anim?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <span>View All Projects on GitHub</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Background */}
      <div className="projects-bg">
        <div className="bg-lines" />
      </div>
    </section>
  )
}

export default Projects
