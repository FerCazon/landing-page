import React from 'react';
import Container from 'react-bootstrap/Container';
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from './index';

const Sections = () => (
  <Container style={{ height: '100%', position: 'relative' }}>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
  </Container>
);

export default Sections;
