import { ThemeContext } from './contexts/ThemeContext';
import NavBar from './components/Header';
import Skills from './components/Skills';

import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AboutMeAndAvatar from './components/aboutMe/AboutMeAndAvatar';
import { Col, Row } from 'reactstrap';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <ThemeContext.Provider value={ThemeContext._currentValue}>
            <div>
                <NavBar />
                <Row>
                    <Col>
                        <AboutMeAndAvatar />
                    </Col>
                </Row>
                <Education />
                <Skills />
                <Portfolio />
                <ContactMe />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
