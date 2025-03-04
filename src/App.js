import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { useTransition, animated } from 'react-spring';
import NavBar from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './components/Home';
import Certification from './components/Certification';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from './components/chat/Chat';
import { ChatContext } from './contexts/ChatContext';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const ids = [
                'home',
                'education',
                'skills',
                'portfolio',
                'contact',
                'footer',
            ];
            let currentSection = 'home';

            ids.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible =
                        rect.top < window.innerHeight && rect.bottom >= 0;
                    if (isVisible) {
                        currentSection = id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        // Only add the scroll event listener if we're not on the /certifications route
        if (!location.pathname.includes('/certifications')) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]); // Trigger this effect when the location changes

    const setColors = () => {
        let textColor, backgroundColor;
        switch (activeSection) {
            case 'home':
            case 'skills':
            case 'contact':
                textColor = '#fff';
                backgroundColor = '#000';
                break;
            case 'education':
            case 'portfolio':
            case 'footer':
                textColor = '#000';
                backgroundColor = '#fff';
                break;
            default:
                textColor = '#fff';
                backgroundColor = '#000';
        }

        document.documentElement.style.setProperty('--text-color', textColor);
        document.documentElement.style.setProperty(
            '--background-color',
            backgroundColor
        );
    };

    useEffect(() => {
        setColors();
    }, [activeSection]);

    const transitions = useTransition(isChatOpen, {
        from: { opacity: 0, transform: 'translateY(100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(100%)' },
    });

    return (
        <ThemeContext.Provider value={ThemeContext._currentValue}>
            {location.pathname.startsWith('/certifications') ? (
                <Routes>
                    <Route
                        path="/certifications/:certId"
                        element={<Certification />}
                    />
                </Routes>
            ) : (
                <div className="content-container">
                    <NavBar />
                    <Home />
                    <Education />
                    <Skills />
                    <Portfolio />
                    <ContactMe />
                    <div
                        className="chat-container"
                        style={{
                            pointerEvents: isChatOpen ? 'auto' : 'none',
                        }}
                    >
                        {transitions((style, item) =>
                            item ? (
                                <animated.div
                                    style={style}
                                    className="chat-wrapper"
                                >
                                    <Chat chatId={1} />
                                </animated.div>
                            ) : null
                        )}
                    </div>
                    {/* {!isChatOpen && (
                        <div
                            className="chat-button"
                            onClick={() => setIsChatOpen(true)}
                            style={{ pointerEvents: 'auto' }}
                        >
                            <FontAwesomeIcon icon={faComments} size="lg" />
                        </div>
                    )} */}
                    <Footer />
                </div>
            )}
        </ThemeContext.Provider>
    );
};

export default App;
