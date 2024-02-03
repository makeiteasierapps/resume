import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Row, Col } from 'reactstrap';
import {
    EmailManagerData,
    PaxxiumData,
} from '../assets/EmailManagerAssest/Data';
import Carousel from 'react-spring-3d-carousel';
import Project from './Project';

import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projectsData = [EmailManagerData, PaxxiumData];

const Portfolio = () => {
    const theme = useContext(ThemeContext);

    const [slideIndex, setSlideIndex] = useState(0);

    const goToNextSlide = () => {
        const newIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
        setSlideIndex(newIndex);
    };

    const goToPreviousSlide = () => {
        const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
        setSlideIndex(newIndex);
    };

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
            <Row
                className="align-items-center"
                style={{ width: '100%', height: '100%' }}
            >
                {/* Previous Button Column */}
                <Col xs="1" className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={goToPreviousSlide} />
                </Col>

                {/* Carousel Column */}
                <Col xs="10">
                    <Carousel
                        slides={slides}
                        goToSlide={slideIndex}
                        animationConfig={{ tension: 170, friction: 26 }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </Col>

                {/* Next Button Column */}
                <Col xs="1" className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faChevronRight} onClick={goToNextSlide} />
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
