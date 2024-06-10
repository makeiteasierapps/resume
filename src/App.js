import { useState, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import NavBar from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    const getIconColor = () => {
        switch (activeSection) {
            case 'home':
                return '#000';
            case 'education':
                return '#fff';
            case 'skills':
                return '#000';
            case 'portfolio':
                return '#fff';
            case 'contact':
                return '#000';
            default:
                return '#000';
        }
    };

    return (
        <ThemeContext.Provider value={ThemeContext._currentValue}>
            <div className="content-container">
                <NavBar />
                <Home />
                <Education />
                <Skills />
                <Portfolio />
                <ContactMe />
                <Footer />
                <FontAwesomeIcon
                    icon={faComments}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        fontSize: '2rem',
                        color: getIconColor(),
                    }}
                />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
