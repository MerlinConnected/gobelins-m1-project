import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Center,
  Environment,
  Float,
  Loader,
} from '@react-three/drei';

import { useControls } from 'leva';

import { Suspense } from 'react';

export default function Scene() {
  const { color } = useControls({
    color: {
      value: '#FF69B4',
      label: 'Color',
      format: (v) => v,
    },
  });
  return (
    <>
      <Canvas shadows>
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <OrbitControls />
          <ambientLight intensity={1} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
