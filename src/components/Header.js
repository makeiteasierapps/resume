import { useContext } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faGraduationCap,
    faCode,
    faBriefcase,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const theme = useContext(ThemeContext);
    return (
        <Navbar expand="xs" fixed="top" style={{ backgroundColor: 'black' }}>
            <Nav
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    fontFamily: theme.mainText,
                    color: 'white',
                    fontSize: 'clamp(25px, 3vw, 30px)',
                }}
                navbar
            >
                <NavItem>
                    <NavLink
                        href="#home"
                        style={{
                            color: 'white',
                        }}
                    >
                        <FontAwesomeIcon id="HomeIcon" icon={faHome} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#education"
                        style={{
                            color: 'white',
                        }}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#skills"
                        style={{
                            color: 'white',
                        }}
                    >
                        <FontAwesomeIcon icon={faCode} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#portfolio"
                        style={{
                            color: 'white',
                        }}
                    >
                        <FontAwesomeIcon icon={faBriefcase} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#contact"
                        style={{
                            color: 'white',
                        }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
