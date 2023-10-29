import { useRef, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import NavBar from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './components/Home';
import { Element, scroller } from 'react-scroll';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { debounce } from 'lodash';

const App = () => {
    const currentSectionIndex = useRef(0);
    let lastScrollTop = useRef(0);
    let isScrolling = useRef(false);

    // useEffect(() => {
    //     const handleScroll = debounce((e) => {
    //         if (isScrolling.current) {
    //             return;
    //         }

    //         const sections = [
    //             'home',
    //             'education',
    //             'skills',
    //             'portfolio',
    //             'contact',
    //         ];

    //         const st = window.scrollY;
    //         if (st > lastScrollTop.current) {
    //             // Downscroll
    //             if (currentSectionIndex.current < sections.length - 1) {
    //                 currentSectionIndex.current =
    //                     currentSectionIndex.current + 1;
    //             }
    //         } else {
    //             // Upscroll
    //             if (currentSectionIndex.current > 0) {
    //                 currentSectionIndex.current =
    //                     currentSectionIndex.current - 1;
    //             }
    //         }
    //         lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    //         isScrolling.current = true;
    //         scroller.scrollTo(sections[currentSectionIndex.current], {
    //             duration: 500,
    //             delay: 0,
    //             smooth: 'easeInOutQuart',
    //         });

    //     }, 500); // Debounce time

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <ThemeContext.Provider value={ThemeContext._currentValue}>
            <div
                style={{
                    height: '100vh',
                }}
            >
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
