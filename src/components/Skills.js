import { Container, Row, Col } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as FirebaseIcon } from '../assets/skillsIcons/Firebase_Logo.svg';
import { ReactComponent as DockerIcon } from '../assets/skillsIcons/docker_logo.svg';
import { ReactComponent as PythonIcon } from '../assets/skillsIcons/python-icon.svg';
import { ReactComponent as ReactIcon } from '../assets/skillsIcons/react-2.svg';
import { ReactComponent as JsIcon } from '../assets/skillsIcons/js_logo.svg';
import { ReactComponent as BootstrapIcon } from '../assets/skillsIcons/bootstrap_5_logo.svg';
import { ReactComponent as MaterialIcon } from '../assets/skillsIcons/material_logo.svg';

const AnnimatedSkillsIcon = ({ delay, icon: Icon }) => {
    const [ref, inView] = useInView();
    const props = useSpring({
        from: {
            opacity: 0,
            marginTop: 100,
            marginBottom: -100,
        },
        to: {
            opacity: inView ? 1 : 0,
            marginTop: inView ? 0 : 100,
            marginBottom: inView ? 0 : -100,
        },
        delay: delay,
    });

    return (
      <animated.div ref={ref} style={props}>
          <Icon style={{ width: 'clamp(100px, 10vw, 200px)' }} />
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
    ];

    return (
        <Container
            className="d-flex justify-content-center"
            id="skills"
            style={{ height: '100vh', backgroundColor: 'white' }}
            fluid
        >
            <Row className=" d-flex justify-content-center align-items-center">
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
    );
};

export default Skills;
