import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import audioFile from '../audio/Welcome.m4a'
import { Vector3, Mesh } from "three";
import { useEffect } from "react";


export function Model(props) {
  const { nodes, materials } = useGLTF("/models/holocruxe-robot.gltf")
  const { viewport } = useThree();
  const groupRef = useRef();
  
  useEffect(() => {
    groupRef.current.traverse((child) => {
      if (child instanceof Mesh) {        
        child.rotation.x = Math.PI / 2;
        child.rotation.z = Math.PI      
        child.scale.set(0.15, 0.15, 0.15);
      }
    });
  }, []);
  
  useFrame(({ mouse }) => {
  if (groupRef && groupRef.current) {
    const [x, y] = [mouse.x, mouse.y];   
    const maxXRotation = Math.PI / 4;
    const minXRotation = -Math.PI / 4;
    const maxYRotation = Math.PI/1
    const minYRotation = -Math.PI/4
    const newXRotation = Math.max(minXRotation, Math.min(maxXRotation, -y * Math.PI));
    const newYRotation = Math.max(minYRotation, Math.min(maxYRotation, x * Math.PI));
    groupRef.current.rotation.y = newYRotation;
    groupRef.current.rotation.x = newXRotation;
  }
});

 

  const playSound = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  const onClick = () => {
    playSound();
  };
  return (
    <group 
    ref={groupRef}
    position={[0,-2,0]}
    {...props} 
    dispose={null}
    onClick={onClick}
  >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.material_0}
        />
      </group>
   
  );
}

useGLTF.preload("/models/holocruxe-robot.gltf");