import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './Box';

const Scene = () => {
  return (
    <Canvas
      colorManagement
      camera={{
        position: [3, 3, 3],
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />

      <gridHelper args={[10, 10, `white`, `gray`]} />
    </Canvas>
  );
};

export default Scene;
