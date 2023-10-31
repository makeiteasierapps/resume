import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Row, Col } from 'reactstrap';

const Portfolio = () => {
    const theme = useContext(ThemeContext);
    return (
        <Container
            id="portfolio"
            className="d-flex text-center justify-content-center align-items-center"
            style={{
                backgroundColor: 'black',
                color: theme.lightBlue,
                height: '100vh',
            }}
            fluid
        >
            <Row>
                <Col style={{ fontFamily: theme.oswald }}>
                    <h2 className="display-4 mb-3">Portfolio</h2>
                    <p className="lead">Exciting projects coming soon!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
