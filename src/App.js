import React from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stars from './components/Stars';
import Lighting from './components/lightning';
import ScrollControl from './components/scrollcontrols';

function App() {   
  return (
   <>  
    <Canvas>
     <color attach="background" args={['#081a29']}/>
     <Lighting/>     
     <Stars />     
     <ScrollControl/>
    </Canvas>
   </>
  );
}

export default App;
