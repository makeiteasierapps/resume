import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const theme = useContext(ThemeContext);
    return (
        <Container
            fluid
            tag="footer"
            className="text-center py-3 border-top"
            style={{ backgroundColor: 'black', color: theme.lightBlue }}
        >
            <Row>
                <Col>
                    <p className="mb-0 py-2 small">
                        &copy; {currentYear} Shaun Offenbacher. All rights
                        reserved.
                    </p>
                    <p className="mb-0 py-2 small">
                        Designed and developed by Shaun Offenbacher
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
