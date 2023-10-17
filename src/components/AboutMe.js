import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <Container id="about-me">
      <Row>
        <Col>
          <h2>About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col className="about-me-content">
          <p>Hello! I'm a junior web developer with a passion for creating interactive and responsive websites. I'm proficient in React, JavaScript, HTML, and CSS, and I'm always eager to learn new technologies and improve my skills.</p>
          <p>My objective is to secure a challenging position where I can effectively contribute my skills as a Software Professional, possessing competent technical skills.</p>
          <p>As a junior web developer, I bring to the table strong problem-solving skills, a keen eye for detail, and the ability to work in a team. I'm also highly motivated and eager to learn new things.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
