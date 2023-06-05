import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgSrc from '../photos/photo5.jpg'

const SectionFive = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 1, ease: "easeInOut" } }
  }
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1, ease: "easeInOut" } }
  }

  return (
    <Row 
      ref={ref}
      className='d-flex align-items-center justify-content-center' 
      style={{width: '100%', padding: '30px 30px', marginBottom: '350px'}}
    >
      <Col xs={6}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <h1 style={{marginBottom: '0px'}}>To make a longlasting legacy for the future</h1>
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

export default SectionFive;
