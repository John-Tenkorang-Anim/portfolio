import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = ({ mousePosition }) => {
  const points = useRef()
  const particleCount = 3000 // Increased for denser effect

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const colorPalette = [
      new THREE.Color('#00FFFF'), // Bright Electric Cyan
      new THREE.Color('#FF1493'), // Deep Pink / Hot Pink
      new THREE.Color('#FFFF00'), // Electric Yellow
      new THREE.Color('#00FF00'), // Bright Lime Green
      new THREE.Color('#FF00FF'), // Magenta
      new THREE.Color('#FFA500'), // Vibrant Orange
      new THREE.Color('#39FF14'), // Neon Green
      new THREE.Color('#FF073A'), // Neon Red
    ]
    
    for (let i = 0; i < particleCount; i++) {
      // Spread particles in a large sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const radius = 3 + Math.random() * 15
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi) - 5
      
      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      
      // Random size
      sizes[i] = Math.random() * 2 + 0.5
    }
    
    return [positions, colors, sizes]
  }, [])
  
  useFrame((state) => {
    if (!points.current) return

    const time = state.clock.getElapsedTime()

    // Enhanced rotation with wave effects
    points.current.rotation.y = time * 0.08 // Faster rotation
    points.current.rotation.x = Math.sin(time * 0.15) * 0.3 // More dramatic tilt
    points.current.rotation.z = Math.cos(time * 0.1) * 0.15 // Add Z-axis rotation

    // Enhanced mouse influence with stronger effect
    const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 2
    const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 2

    points.current.rotation.y += mouseX * 0.003 // 6x stronger
    points.current.rotation.x += mouseY * 0.003

    // Animate individual particles with creative motion
    const positions = points.current.geometry.attributes.position.array
    const colors = points.current.geometry.attributes.color.array
    const sizes = points.current.geometry.attributes.size.array

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Multi-directional wave motion (creates flowing effect)
      positions[i3] += Math.sin(time * 0.5 + i * 0.05) * 0.002
      positions[i3 + 1] += Math.cos(time * 0.7 + i * 0.1) * 0.003
      positions[i3 + 2] += Math.sin(time * 0.3 + i * 0.08) * 0.0015

      // Dynamic pulsing sizes with variation
      const sizeWave = Math.sin(time * 3 + i * 0.5) * 0.5 + 1
      const sizeWave2 = Math.cos(time * 2 + i * 0.3) * 0.3 + 1
      sizes[i] = sizeWave * sizeWave2 * (1.5 + Math.sin(i) * 0.5)

      // Color shifting effect (morphing through palette)
      const colorShift = Math.sin(time * 0.5 + i * 0.1) * 0.15
      colors[i3] = Math.max(0, Math.min(1, colors[i3] + colorShift * 0.1))
      colors[i3 + 1] = Math.max(0, Math.min(1, colors[i3 + 1] + Math.sin(time + i) * 0.05))
      colors[i3 + 2] = Math.max(0, Math.min(1, colors[i3 + 2] + Math.cos(time * 1.5 + i) * 0.05))
    }

    points.current.geometry.attributes.position.needsUpdate = true
    points.current.geometry.attributes.color.needsUpdate = true
    points.current.geometry.attributes.size.needsUpdate = true
  })
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3} // Larger particles for better visibility
        vertexColors
        transparent
        opacity={0.85} // More visible
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default ParticleField
