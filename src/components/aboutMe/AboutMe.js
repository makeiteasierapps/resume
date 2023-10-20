import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutMe = () => {
    return (
        <Container id="about-me" className="text-center">
            <Row>
                <Col>
                    <h2 className="display-4 mb-3">Welcome!</h2>
                    <div
                        className="lead text-wrap mx-auto mb-3"
                        style={{ lineHeight: '1.6' }}
                    >
                        <p className="mb-3">
                            Passionate web developer creating digital
                            experiences with code.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
