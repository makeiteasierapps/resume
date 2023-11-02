import { ThemeContext } from './contexts/ThemeContext';
import NavBar from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './components/Home';
import { Element } from 'react-scroll';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <ThemeContext.Provider value={ThemeContext._currentValue}>
            <div className="content-container">
                <NavBar />
                <Element name="home">
                    <Home />
                </Element>
                <Element name="education">
                    <Education />
                </Element>
                <Element name="skills">
                    <Skills />
                </Element>
                <Element name="portfolio">
                    <Portfolio />
                </Element>
                <Element name="contact">
                    <ContactMe />
                </Element>
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
