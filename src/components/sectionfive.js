import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import imgSrc from '../photos/photo5.jpg'

const SectionFive = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1, ease: 'easeInOut' } },
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const imageRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = imageRef.current.getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    };

    const imgElement = imageRef.current;

    if (imgElement) {
      imgElement.addEventListener('mousemove', handleMouseMove);

      return () => {
        imgElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [x, y, imageRef]);

  return (
    <Row
      ref={ref}
      className="d-flex align-items-center justify-content-center"
      style={{ width: '100%', padding: '30px 30px', marginBottom: '350px' }}
    >
      <Col xs={6} className="d-flex flex-column align-items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-3"
        >
          <h1 style={{ marginBottom: '0px' }}>To make a longlasting legacy for the future</h1>
        </motion.div>
        <motion.img
          ref={imageRef}
          variants={imageVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ rotateX, rotateY }}
          src={imgSrc}
          alt="img"          
        />
      </Col>
    </Row>
  );
};

export default SectionFive;
