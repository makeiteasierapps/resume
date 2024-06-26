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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from './components/chat/Chat';
import { ChatContext } from './contexts/ChatContext';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);

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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log(activeSection);
    }, [activeSection]);

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
            <>
                <div className="content-container">
                    <NavBar />
                    <Home />
                    <Education />
                    <Skills />
                    <Portfolio />
                    <ContactMe />
                    <Footer />
                </div>
                <div className="chat-container">
                    {transitions((style, item) =>
                        item ? (
                            <animated.div style={style} className="chat-wrapper">
                                <Chat chatId={1} />
                            </animated.div>
                        ) : (
                            <animated.div
                                style={style}
                                className="chat-button"
                                onClick={() => setIsChatOpen(true)}
                            >
                                Chat Now
                            </animated.div>
                        )
                    )}
                </div>
            </>
        </ThemeContext.Provider>
    );
};

export default App;
