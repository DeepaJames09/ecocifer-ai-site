
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const OrbitingElements = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Small orbiting spheres representing AI nodes */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 3,
            Math.sin((i / 6) * Math.PI * 2) * 3,
            Math.sin((i / 6) * Math.PI * 4) * 1
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#6FCF97" emissive="#6FCF97" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const MainOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#27AE60"
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        emissive="#6FCF97"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const AnimatedOrb = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00BFA5" />
        
        <MainOrb />
        <OrbitingElements />
      </Canvas>
    </div>
  );
};

export default AnimatedOrb;
