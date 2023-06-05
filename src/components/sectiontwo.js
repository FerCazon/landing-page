import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imgSrc from '../photos/photo2.jpeg'
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const SectionTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 1, ease: "easeInOut" } }
  }

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1, ease: "easeInOut" } }
  }

  return (
    <Row 
      ref={ref}
      className='d-flex align-items-center justify-content-center' 
      style={{width: '100%', padding: '30px 30px', marginBottom: '350px'}}
    >
      <Col xs={6} className="d-flex flex-column align-items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-3"
        >
          <h1 style={{marginBottom: '0px'}}>We are here to provide you a journey</h1>
        </motion.div>
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          src={imgSrc}
          alt="Your alt text"
        />
      </Col>
    </Row>
  );
}

export default SectionTwo;