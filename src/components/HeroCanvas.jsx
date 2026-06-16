import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#2DD4BF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[2, 1, -2]}>
        <mesh>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#2DD4BF" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-2, -1, -1]}>
        <mesh>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#7C3AED" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1} position={[1, -2, -3]}>
        <mesh>
          <tetrahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#F472B6" wireframe opacity={0.2} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
