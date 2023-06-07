import './App.css';
import {ScrollControls, Scroll, Sparkles} from "@react-three/drei"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from './components';
import {Modelrc} from "./models/Modelrc"
import { Canvas } from '@react-three/fiber';

function App() {   
  return (
   <> 
   
 
   <color attach="background" args={['#000000']}/>
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
<pointLight position={[-10, 0, -20]} color="teal" intensity={2.5} />
<pointLight position={[0, -10, 0]} intensity={1.5} />
   <ScrollControls pages={6} damping={0.25}>
    <Scroll> 
    <Modelrc />
    <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
    <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
    </Scroll>
    <Scroll html style={{width:'100%', height:'100%'}}>
    <Container style={{height: '100%', position: 'relative'}}>
  <SectionOne/>               
  <SectionTwo/>
  <SectionThree/>
  <SectionFour/>
  <SectionFive/>
  <SectionSix/>
          </Container>        
    </Scroll>
   </ScrollControls>   
   </>
  );
}

export default App;
