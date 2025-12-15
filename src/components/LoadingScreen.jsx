import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const letters = "JOHN".split("")
  
  return (
    <motion.div 
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loading-content">
        {/* Animated Logo */}
        <div className="loading-logo">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="loading-letter"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Loading bar */}
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        
        {/* Loading text */}
        <motion.p 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="loading-bracket">[</span>
          <span className="loading-status">INITIALIZING PORTFOLIO</span>
          <span className="loading-bracket">]</span>
        </motion.p>

        {/* Orbiting elements */}
        <div className="orbit-container">
          <div className="orbit orbit-1">
            <div className="orbit-dot" />
          </div>
          <div className="orbit orbit-2">
            <div className="orbit-dot" />
          </div>
          <div className="orbit orbit-3">
            <div className="orbit-dot" />
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />
    </motion.div>
  )
}

export default LoadingScreen
