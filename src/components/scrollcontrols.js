import React from 'react';
import { ScrollControls, Scroll } from "@react-three/drei";
import Sections from './sections';
import { Modelv4 } from '../models/modelv4';
import { Sparkles } from "@react-three/drei";


const ScrollControl = () => (
  <ScrollControls pages={5.4} damping={0.25}>
    <Scroll>
      <Modelv4 />  
      <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20, 100, 20]} />
      <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30, 100, 10]} />
    </Scroll>
    <Scroll html style={{ width: '100%', height: '100%' }}>
      <Sections />
    </Scroll>
  </ScrollControls>
);

export default ScrollControl;
