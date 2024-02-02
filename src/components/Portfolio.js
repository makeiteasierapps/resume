import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Row, Col } from 'reactstrap';
import { EmailManagerData } from '../assets/EmailManagerAssest/Data';
import Project from './Project';

const { clientTech, serverTech, ProjectDetails, images } = EmailManagerData;
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
                <Col>
                    <Project
                        clientTech={clientTech}
                        serverTech={serverTech}
                        ProjectDetails={ProjectDetails}
                        images={images}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
