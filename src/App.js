import './App.css';
import {ScrollControls, Scroll, Sparkles} from "@react-three/drei"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from './components';
import audioFile from './audio/Welcome.m4a'
import Button from 'react-bootstrap/Button';




function App() {  
  const audio = new Audio(audioFile);

  const playSound = () => {
    audio.play();
  };
  return (
   <>

   <color attach="background" args={['#000000']}/>
   <ambientLight intensity={1} />
   <ScrollControls pages={6} damping={0.25}>
    <Scroll> 
    <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
    <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
    </Scroll>
    <Scroll html style={{width:'100%', height:'100%'}}>
    <Container style={{height: '100%', position: 'relative'}}>
  <SectionOne/>
  <Button onClick={playSound} style={{ position: 'absolute', bottom: 0, right: 0 }}>Play Sound</Button>                             
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
