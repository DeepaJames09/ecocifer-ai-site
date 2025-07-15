
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#22c55e"
        roughness={0.2}
        metalness={0.8}
        emissive="#0f4f3c"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const AnimatedOrb = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#ffffff', 0);
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <FloatingOrb />
      </Canvas>
    </div>
  );
};

export default AnimatedOrb;
