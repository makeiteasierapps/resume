import React, { useState, useContext } from 'react';
import '../styles/Project.scss';
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-spring-3d-carousel';
import { ThemeContext } from '../contexts/ThemeContext';
import ProjectModal from './ProjectModal';

const Project = ({ clientTech, serverTech, ProjectDetails, images }) => {
    const theme = useContext(ThemeContext);
    const [modal, setModal] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = images.map((image, index) => ({
        key: index,
        content: (
            <img
                src={image.image}
                alt={'Email Manager'}
                onClick={() => {
                    if (index === slideIndex) setModal(!modal);
                    setSlideIndex(index);
                }}
                style={{
                    backgroundColor: 'black',
                    width: '10rem',
                    height: '10rem',
                    boxShadow: `0 0 6px   ${theme.darkTeal}`,
                    borderRadius: '7px',
                }}
            />
        ),
    }));

    return (
        <Container
            className="project-main-container"
            style={{ height: '60vh', width: '80vw' }}
        >
            <Row style={{ height: '100%' }}>
                <Col
                    md="6"
                    style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Row style={{ paddingBottom: '1rem' }}>
                        <Col>
                            <h1
                                style={{
                                    fontFamily: ProjectDetails.font,
                                    color: ProjectDetails.fontColor,
                                }}
                            >
                                {ProjectDetails.title}
                            </h1>
                            <p>{ProjectDetails.description}</p>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '1rem' }}>
                        <Col className="d-flex flex-column align-items-center ">
                            {clientTech.map((tech) => (
                                <Row key={tech.name}>
                                    {tech.logo &&
                                    typeof tech.logo === 'object' ? (
                                        <FontAwesomeIcon
                                            icon={tech.logo}
                                            style={{
                                                padding: '5px 0 0 0',
                                                color: '#61dbfb',
                                                fontSize: '3rem',
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            style={{
                                                width: '8.4rem',
                                                padding: '0.5rem',
                                            }}
                                        />
                                    )}
                                </Row>
                            ))}
                            <Row>
                                <a
                                    href={ProjectDetails.clientCode}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {ProjectDetails.serverCode
                                        ? 'Client Code'
                                        : null}
                                </a>
                            </Row>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            {serverTech.map((tech) => (
                                <Row key={tech.name}>
                                    {tech.logo ? (
                                        typeof tech.logo === 'string' ? (
                                            <p style={{ whiteSpace: 'nowrap' }}>
                                                {tech.logo}
                                            </p>
                                        ) : (
                                            React.createElement(tech.logo, {
                                                style: {
                                                    width: '6.6rem',
                                                    paddingBottom: '1rem',
                                                    fill: '#fff',
                                                },
                                            })
                                        )
                                    ) : null}
                                </Row>
                            ))}
                            <Row>
                                <a
                                    href={ProjectDetails.serverCode}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {ProjectDetails.serverCode
                                        ? 'Server Code'
                                        : null}
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md="6" style={{ padding: '2rem', minHeight: '300px' }}>
                    <Carousel
                        slides={slides}
                        goToSlide={slideIndex}
                        style={{ width: '80%' }}
                    />
                </Col>
            </Row>
            <ProjectModal
                images={images}
                modal={modal}
                setModal={setModal}
                slideIndex={slideIndex}
            />
        </Container>
    );
};

export default Project;
