import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionOne = () => (
  <Row 
    className='text-center align-items-center justify-content-center' 
    style={{width: '100%', minHeight: '100vh', padding: '0px 30px 0px'}}
  >
    <Col xs={6}>
      <div>
        <h1 style={{marginBottom: '0px'}}>WELCOME TO HOLOCRUXE</h1>
      </div>
    </Col>
  </Row>
)

export default SectionOne;
