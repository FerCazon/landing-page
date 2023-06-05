import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"

const SectionSix = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 1, ease: "easeInOut", delay: 0.25 } }
  }

  return (
    <Row 
      ref={ref}
      className='d-flex align-items-center justify-content-center' 
      style={{width: '100%', padding: '30px 30px', marginBottom: '50px'}}
    >
      <Col xs={6}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <h1 style={{marginBottom: '0px'}}>
            Holocruxe is an AI App designed to help people to capture, save and 
            share your most beloved experiences and memories. We are a professional 
            team passionate about tech and preservation of human life
          </h1>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 1 }}
          >
            <Button variant="outline-light" size="lg">Let's start now</Button>{' '}
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  );
}

export default SectionSix;
