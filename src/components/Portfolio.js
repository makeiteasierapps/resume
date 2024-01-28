import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Row, Col } from 'reactstrap';
import Project from './Project';

import EmailManagerLogo from '../assets/email-manager-logo.jpeg';
import EmailManagerLogin from '../assets/emailManagerLogin.png';
const Portfolio = () => {
    const theme = useContext(ThemeContext);
    const images = [EmailManagerLogo, EmailManagerLogin];
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
                        title="Email Manager"
                        description="Full Stack Web App utilizing Mailgun and OpenAi API's. Built with React and Node"
                        images={images}
                        githubUrl="https://github.com/user/project1"
                        hostedUrl="https://project1.com"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
