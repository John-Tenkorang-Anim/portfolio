import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingShapes = ({ mousePosition }) => {
  const groupRef = useRef()

  // Create multiple geometric shapes
  const shapes = [
    { type: 'octahedron', position: [-4, 2, -5], color: '#00FFFF', scale: 0.8 },
    { type: 'torus', position: [5, -3, -8], color: '#FF1493', scale: 0.6 },
    { type: 'icosahedron', position: [-6, -4, -6], color: '#FFFF00', scale: 0.7 },
    { type: 'tetrahedron', position: [4, 3, -7], color: '#39FF14', scale: 0.9 },
    { type: 'dodecahedron', position: [0, 5, -10], color: '#FF00FF', scale: 0.5 },
    { type: 'octahedron', position: [7, 0, -9], color: '#FFA500', scale: 0.6 },
    { type: 'cone', position: [-3, -2, -4], color: '#00FFFF', scale: 0.8 },
    { type: 'torus', position: [2, -5, -7], color: '#FF073A', scale: 0.5 },
  ]

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()

    // Mouse influence on group
    const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 2
    const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 2

    groupRef.current.rotation.x = mouseY * 0.2
    groupRef.current.rotation.y = mouseX * 0.2

    // Animate each shape individually
    groupRef.current.children.forEach((shape, index) => {
      // Floating motion
      shape.position.y += Math.sin(time * 0.5 + index) * 0.003
      shape.position.x += Math.cos(time * 0.3 + index) * 0.002

      // Rotation
      shape.rotation.x += 0.005 * (index % 2 === 0 ? 1 : -1)
      shape.rotation.y += 0.008 * (index % 3 === 0 ? 1 : -1)
      shape.rotation.z += 0.003 * (index % 4 === 0 ? 1 : -1)

      // Pulsing scale
      const pulse = Math.sin(time * 2 + index) * 0.1 + 1
      shape.scale.setScalar(shapes[index].scale * pulse)
    })
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => {
        let geometry

        switch (shape.type) {
          case 'octahedron':
            geometry = <octahedronGeometry args={[1, 0]} />
            break
          case 'torus':
            geometry = <torusGeometry args={[1, 0.4, 16, 100]} />
            break
          case 'icosahedron':
            geometry = <icosahedronGeometry args={[1, 0]} />
            break
          case 'tetrahedron':
            geometry = <tetrahedronGeometry args={[1, 0]} />
            break
          case 'dodecahedron':
            geometry = <dodecahedronGeometry args={[1, 0]} />
            break
          case 'cone':
            geometry = <coneGeometry args={[1, 2, 32]} />
            break
          default:
            geometry = <boxGeometry args={[1, 1, 1]} />
        }

        return (
          <mesh key={index} position={shape.position}>
            {geometry}
            <meshStandardMaterial
              color={shape.color}
              emissive={shape.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.3}
              wireframe
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default FloatingShapes
