import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"

const SectionSix = () => (
<Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '500vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>Holocruxe is an AI App designed to help people to capture, save and share your most beloved experiences and memories. We are a professional team passionate about tech and preservation of human life</h1>
                  
                    <Button variant="outline-light" size="lg">Let's start now</Button>{' '}
                  </div>
              </Col>
            </Row>         
)

export default SectionSix;