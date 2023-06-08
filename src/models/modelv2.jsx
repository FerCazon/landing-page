import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import audioFile from '../audio/Welcome.m4a'
import {  Mesh } from "three";
import { useEffect } from "react";

export function Modelv2(props) {
    const gltf = useGLTF("/models/robotv2.gltf");
  const groupRef = useRef();

    gltf.scene.rotation.y = Math.PI /0.665   

  
  useFrame(({ mouse }) => {
    if (groupRef && groupRef.current) {
      const scaleFactor = 4;
      const [x, y] = [mouse.x / scaleFactor, mouse.y / scaleFactor]; 
      const maxXRotation = Math.PI / 4;
      const minXRotation = -Math.PI / 4;
      const maxYRotation = Math.PI/4
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
    position={[0, -1.2, 0]}
    {...props} 
    dispose={null}
    onClick={onClick}
  >
      <primitive object={gltf.scene}/>
    </group>
  );
}

useGLTF.preload("/models/robotv2.gltf");