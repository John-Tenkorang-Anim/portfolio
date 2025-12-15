import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = ({ mousePosition }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()

    // Animate the shader uniform
    meshRef.current.material.uniforms.uTime.value = time

    // Subtle mouse influence
    const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 0.5
    const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 0.5
    meshRef.current.material.uniforms.uMouse.value.set(mouseX, mouseY)
  })

  // Custom shader material - Sophisticated Deep Space Data Visualization
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;

      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec2 vUv;
      varying vec3 vPosition;

      #define PI 3.14159265359

      // Hash functions
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      vec2 hash2(vec2 p) {
        return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
      }

      // Smooth noise
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Fractal Brownian Motion for organic depth
      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;

        for(int i = 0; i < 4; i++) {
          value += amplitude * noise(p * frequency);
          frequency *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      // Grid pattern for tech aesthetic
      float grid(vec2 p, float scale) {
        vec2 grid = fract(p * scale);
        float lineWidth = 0.02;

        float gx = smoothstep(lineWidth, 0.0, grid.x) + smoothstep(1.0 - lineWidth, 1.0, grid.x);
        float gy = smoothstep(lineWidth, 0.0, grid.y) + smoothstep(1.0 - lineWidth, 1.0, grid.y);

        return max(gx, gy);
      }

      // Soft circular gradient
      float softCircle(vec2 p, vec2 center, float radius, float softness) {
        float dist = length(p - center);
        return smoothstep(radius + softness, radius - softness, dist);
      }

      // Animated data streams
      float dataStream(vec2 p, float offset, float speed) {
        float stream = sin(p.y * 20.0 - uTime * speed + offset) * 0.5 + 0.5;
        float mask = smoothstep(0.1, 0.0, abs(fract(p.x + uTime * 0.1 + offset * 0.1) - 0.5));
        return stream * mask;
      }

      // Subtle particle field
      float particles(vec2 uv, float density) {
        vec2 p = uv * density;
        vec2 grid = floor(p);
        vec2 frac = fract(p);

        float result = 0.0;
        for(int y = -1; y <= 1; y++) {
          for(int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 cell = grid + offset;
            float h = hash(cell);

            if(h > 0.92) {
              vec2 particlePos = offset + vec2(h, fract(h * 100.0 + uTime * 0.2));
              float dist = length(frac - particlePos);
              result += smoothstep(0.03, 0.0, dist) * (0.3 + sin(uTime + h * 10.0) * 0.2);
            }
          }
        }
        return result;
      }

      // Neural network connection
      float neuralConnection(vec2 p, vec2 start, vec2 end, float thickness) {
        vec2 pa = p - start;
        vec2 ba = end - start;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        float dist = length(pa - ba * h);

        float line = 1.0 - smoothstep(0.0, thickness, dist);

        // Flowing pulse
        float pulse = smoothstep(0.08, 0.0, abs(h - fract(uTime * 0.2)));

        return line * 0.15 + pulse * 0.4;
      }

      void main() {
        vec2 uv = vUv;
        vec2 centeredUV = (vUv - 0.5) * 2.0;

        // Mouse parallax (very subtle)
        vec2 mouseInfluence = uMouse * 0.15;
        uv += mouseInfluence * 0.05;
        centeredUV += mouseInfluence * 0.08;

        // Deep dark gradient base - VERY DARK to ensure text visibility
        vec3 baseColor = mix(
          vec3(0.01, 0.015, 0.03),  // Almost black blue
          vec3(0.02, 0.01, 0.04),   // Almost black purple
          uv.y
        );

        vec3 finalColor = baseColor;

        // Subtle organic depth using FBM (very dark)
        float depth = fbm(centeredUV * 2.0 + uTime * 0.05);
        finalColor += vec3(0.01, 0.015, 0.025) * depth * 0.3;

        // Very subtle grid pattern (tech aesthetic, barely visible)
        float gridPattern = grid(centeredUV + mouseInfluence * 0.1, 8.0);
        finalColor += vec3(0.01, 0.02, 0.04) * gridPattern * 0.15;

        // Animated circles representing data nodes (very dark, subtle)
        vec2[] nodePositions = vec2[](
          vec2(-0.7, 0.4),
          vec2(-0.3, -0.5),
          vec2(0.5, 0.3),
          vec2(0.6, -0.4),
          vec2(0.0, 0.6),
          vec2(-0.5, -0.2)
        );

        // Dark subtle colors that won't interfere with text
        vec3[] darkColors = vec3[](
          vec3(0.02, 0.04, 0.08),  // Dark blue
          vec3(0.04, 0.02, 0.06),  // Dark purple
          vec3(0.03, 0.05, 0.07),  // Dark cyan
          vec3(0.05, 0.03, 0.05),  // Dark magenta
          vec3(0.03, 0.04, 0.06),  // Dark slate
          vec3(0.04, 0.03, 0.07)   // Dark indigo
        );

        // Draw subtle glowing nodes
        for(int i = 0; i < 6; i++) {
          vec2 animatedPos = nodePositions[i];
          animatedPos += vec2(
            sin(uTime * 0.3 + float(i)) * 0.1,
            cos(uTime * 0.4 + float(i) * 0.7) * 0.1
          );

          float circle = softCircle(centeredUV, animatedPos, 0.15, 0.25);
          float pulse = sin(uTime * 1.5 + float(i) * 1.2) * 0.3 + 0.7;

          finalColor += darkColors[i] * circle * pulse * 0.4;
        }

        // Neural connections between nodes (very subtle)
        for(int i = 0; i < 5; i++) {
          vec2 start = nodePositions[i];
          vec2 end = nodePositions[i + 1];

          start += vec2(sin(uTime * 0.3 + float(i)) * 0.1, cos(uTime * 0.4 + float(i) * 0.7) * 0.1);
          end += vec2(sin(uTime * 0.3 + float(i + 1)) * 0.1, cos(uTime * 0.4 + float(i + 1) * 0.7) * 0.1);

          float conn = neuralConnection(centeredUV, start, end, 0.002);
          vec3 connColor = mix(darkColors[i], darkColors[i + 1], 0.5);
          finalColor += connColor * conn * 0.3;
        }

        // Subtle data streams (very dark)
        for(int i = 0; i < 3; i++) {
          float offset = float(i) * 2.0;
          float stream = dataStream(uv, offset, 1.5);
          vec3 streamColor = vec3(0.02, 0.03, 0.05);
          finalColor += streamColor * stream * 0.08;
        }

        // Tiny particle field (very subtle stars/data points)
        float particleField = particles(uv, 25.0);
        finalColor += vec3(0.04, 0.05, 0.08) * particleField * 0.4;

        // Python hexagonal pattern (extremely subtle)
        vec2 hex = vec2(centeredUV.x + centeredUV.y * 0.577, centeredUV.y * 1.155) * 12.0;
        vec2 hexGrid = fract(hex) - 0.5;
        float hexDist = abs(hexGrid.x) + abs(hexGrid.y);
        float hexPattern = smoothstep(0.5, 0.3, hexDist);
        float hexAnim = sin(uTime * 0.3 + length(hex)) * 0.5 + 0.5;

        finalColor += vec3(0.015, 0.025, 0.04) * hexPattern * hexAnim * 0.1;

        // Vignette to darken edges even more
        float vignette = 1.0 - length(centeredUV) * 0.4;
        finalColor *= vignette;

        // Ensure background never gets too bright
        finalColor = clamp(finalColor, 0.0, vec3(0.08, 0.1, 0.12));

        gl_FragColor = vec4(finalColor, 0.45);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[50, 50, 64, 64]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  )
}

export default ParticleField
