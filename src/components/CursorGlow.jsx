import { motion } from 'framer-motion'

const CursorGlow = ({ position }) => {
  return (
    <motion.div
      className="cursor-glow"
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
      style={{
        position: 'fixed',
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  )
}

export default CursorGlow
