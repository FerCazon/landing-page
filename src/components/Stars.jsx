// stars.jsx

import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(20000), { radius: 4.0 }));

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
    for (let i = 0; i < sphere.length; i += 3) {
        sphere[i + 2] -= 0.05; // Decrease this value for slower motion
        if (sphere[i + 2] < -2) {
            sphere[i + 2] = 4;
        }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
});

<PointMaterial
    transparent
    color='#f272c8'
    size={2} // Increase this value for bigger stars
    sizeAttenuation={true}
    depthWrite={false}
/>

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#59c1bd'
          size={0.009}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
