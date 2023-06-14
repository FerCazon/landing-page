import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Planet(props) {
    const gltf = useGLTF("/models/scene.gltf");
  const groupRef = useRef(); 
  

  return (
    <group 
    ref={groupRef}
    position={[0, -1.2, 0]}
    {...props} 
    dispose={null}
   
  >
      <primitive object={gltf.scene}/>
    </group>
  );
}

useGLTF.preload("/models/scene.gltf");