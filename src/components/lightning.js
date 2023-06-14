import React from 'react';

const Lighting = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight
      castShadow
      position={[4, 8, 5]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
    <pointLight position={[0, -10, 0]} intensity={2} />
    <pointLight position={[-1, 0, 0]} color="white" intensity={1} />
    <pointLight position={[15, 0, 0]} color="white" intensity={1} />
  </>
);

export default Lighting;
