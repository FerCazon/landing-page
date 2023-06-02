import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("holocruxe-robot.gltf")
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.03, 0.44, 0.33]}
        rotation={[1.56, 0, -Math.PI]}
        scale={[-0.13, 0.13, 0.13]}
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
    </group>
  );
}

useGLTF.preload("/holocruxe robot.gltf");