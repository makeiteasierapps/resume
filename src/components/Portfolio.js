import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Row, Col } from 'reactstrap';
import {
    EmailManagerData,
    PaxxiumData,
} from '../assets/EmailManagerAssest/Data';
import Carousel from 'react-spring-3d-carousel';
import Project from './Project';

const projectsData = [EmailManagerData, PaxxiumData];

const Portfolio = () => {
    const theme = useContext(ThemeContext);

    const [slideIndex, setSlideIndex] = useState(0);

    const slides = projectsData.map((data, index) => ({
        key: index,
        content: (
            <Project
                clientTech={data.clientTech}
                serverTech={data.serverTech}
                ProjectDetails={data.ProjectDetails}
                images={data.images}
            />
        ),
    }));
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
                    <Carousel
                        slides={slides}
                        goToSlide={slideIndex}
                        animationConfig={{ tension: 170, friction: 26 }}
                        style={{ width: '100vw', height: '100vh' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
