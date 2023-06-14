import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import audioFile from '../audio/Welcome.mp3';

export function Modelv4(props) {
  const gltf = useGLTF("/models/robotv4.gltf");
  const groupRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false); // Track audio playing state
  const audioRef = useRef(null); // Ref to store the audio element

  gltf.scene.rotation.y = Math.PI / 0.665;

  useFrame(({ mouse }) => {
    if (groupRef && groupRef.current) {
      const scaleFactor = 8;
      const [x, y] = [mouse.x / scaleFactor, mouse.y / scaleFactor]; 
      const maxXRotation = Math.PI 
      const minXRotation = -Math.PI 
      const maxYRotation = Math.PI
      const minYRotation = -Math.PI
      const newXRotation = Math.max(minXRotation, Math.min(maxXRotation, -y * Math.PI));
      const newYRotation = Math.max(minYRotation, Math.min(maxYRotation, x * Math.PI));
      groupRef.current.rotation.y = newYRotation;
      groupRef.current.rotation.x = newXRotation;
    }
  });
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      } else {
        const audio = new Audio(audioFile);
        audio.play();
        audioRef.current = audio; // Store the audio element reference
      }
      setIsPlaying(true);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  };

  const onClick = () => {
    toggleSound();
  };

  return (
    <group
      ref={groupRef}
      position={[0, -1.2, 0]}
      {...props}
      dispose={null}
      onClick={onClick}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}
useGLTF.preload("/models/robotv4.gltf");