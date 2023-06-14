import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 6.0 }));

  // Apply a radial distribution to make the center less dense
  for (let i = 0; i < sphere.length; i += 3) {
    const dx = sphere[i];
    const dy = sphere[i + 1];
    const dz = sphere[i + 2];
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const k = Math.max(0.1, d);
    sphere[i] *= k;
    sphere[i + 1] *= k;
    sphere[i + 2] *= k;
  }

  useFrame(() => {
    for (let i = 0; i < sphere.length; i += 3) {
      sphere[i + 2] -= 0.02; // Modify this value to adjust the speed of stars coming towards the camera
  
      if (sphere[i + 2] < -5) {
        // When the star is beyond the camera, we randomize its position again
        const theta = 2 * Math.PI * Math.random(); // Random value between 0 and 2*PI
        const phi = Math.acos(2 * Math.random() - 1); // Random value between 0 and PI
        const radius = 5.0 * Math.cbrt(Math.random()); // Random value between 0 and 5.0, cubic root distribution
        
        // Convert spherical to Cartesian coordinates
        sphere[i] = radius * Math.sin(phi) * Math.cos(theta); 
        sphere[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        sphere[i + 2] = 5 + radius * Math.cos(phi); // Reset position to start behind the camera
  
        // Apply radial distribution again
        const dx = sphere[i];
        const dy = sphere[i + 1];
        const dz = sphere[i + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const k = Math.max(0.1, d);
        sphere[i] *= k;
        sphere[i + 1] *= k;
        sphere[i + 2] *= k;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#59c1bd"
          size={0.059}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;