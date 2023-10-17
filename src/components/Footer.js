import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container tag="footer" className="Footer">
      <Row>
        <Col>
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Designed and developed by Your Name</p>
        </Col>
      </Row>
      <Row>
        <Col className="social-links">
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
