import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <Container id="portfolio" className="portfolio-section">
      <Row>
        <Col>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-description">Exciting projects coming soon!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
