import { Container, Row, Col } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import '../styles/Skills.scss';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as FirebaseIcon } from '../assets/skillsIcons/Firebase_Logo.svg';
import { ReactComponent as DockerIcon } from '../assets/skillsIcons/docker_logo.svg';
import { ReactComponent as PythonIcon } from '../assets/skillsIcons/python-icon.svg';
import { ReactComponent as ReactIcon } from '../assets/skillsIcons/react-2.svg';
import { ReactComponent as JsIcon } from '../assets/skillsIcons/js_logo.svg';
import { ReactComponent as BootstrapIcon } from '../assets/skillsIcons/bootstrap_5_logo.svg';
import { ReactComponent as MaterialIcon } from '../assets/skillsIcons/material_logo.svg';
import { ReactComponent as NodeIcon } from '../assets/skillsIcons/node-js.svg';
import { ReactComponent as MongoIcon } from '../assets/skillsIcons/mongoDB.svg';

const AnnimatedSkillsIcon = ({ delay, icon: Icon }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const props = useSpring({
        from: {
            opacity: 0,
            marginTop: 50,
            marginBottom: -50,
        },
        to: {
            opacity: inView ? 1 : 0,
            marginTop: inView ? 0 : 50,
            marginBottom: inView ? 0 : -50,
        },
        delay: delay,
    });

    return (
        <animated.div ref={ref} style={props}>
            <Icon className="icon" />
        </animated.div>
    );
};

const Skills = () => {
    const skills = [
        { icon: JsIcon },
        { icon: ReactIcon },
        { icon: PythonIcon },
        { icon: FirebaseIcon },
        { icon: DockerIcon },
        { icon: BootstrapIcon },
        { icon: MaterialIcon },
        { icon: NodeIcon },
        { icon: MongoIcon },
    ];

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            id="skills"
            style={{
                height: '100vh',
                width: '100vw',
                paddingTop: '2rem',
                backgroundColor: 'white',
            }}
            fluid
        >
            <Container
                className="d-flex justify-content-center"
                id="skills"
                style={{
                    height: '80vh',
                    width: '100vw',
                }}
                fluid
            >
                <Row className="d-flex justify-content-center align-items-center">
                    {skills.map((skill, index) => (
                        <Col
                            className="d-flex justify-content-center align-items-center"
                            xs={4}
                            md={4}
                            key={index}
                        >
                            <AnnimatedSkillsIcon
                                delay={index * 400}
                                icon={skill.icon}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Skills;
