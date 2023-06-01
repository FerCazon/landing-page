import './App.css';
import {ScrollControls, Scroll, Sparkles} from "@react-three/drei"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Butterfly } from './models/Scene';

function App() {
  return (
   <>
   <color attach="background" args={['#000000']}/>
   <ambientLight intensity={1} />
   <ScrollControls pages={6} damping={0.25}>
    <Scroll>
    {/* <Butterfly scale={0.05} position={[0,-2.5,0]} /> */}
    <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
    <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
    </Scroll>
    <Scroll html style={{width:'100%', height:'100%'}}>

    <Container style={{height: '100%', position: 'relative'}}>

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px'}}>WELCOME TO HOLOCRUXE</h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '100vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>We are here to provide you a journey</h1>
                  </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '200vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>Along your most beloved memories</h1>
                   
                  </div>
              </Col>
            </Row> 
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '300vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>Live your life</h1>
                  </div>
              </Col>
            </Row>   

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '400vh'}}>
              <Col xs={8}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>To make a longlasting legacy for the future</h1>
                  </div>
              </Col>
            </Row>  

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '500vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>Holocruxe is an AI App designed to help people to capture, save an dhsare your most beloved experiences and memories. We are a professional team passionate about tech and preservation of human life</h1>
                  
                    <Button variant="outline-light" size="lg">Let's start now</Button>{' '}
                  </div>
              </Col>
            </Row>                                    
          </Container>        
    </Scroll>
   </ScrollControls>
   </>
  );
}

export default App;
