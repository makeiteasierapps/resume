import { useContext } from 'react';
import { Navbar, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';
const Header = () => {
    const theme = useContext(ThemeContext);
    return (
        <Navbar
            expand="xs"
            fixed="top"
            style={{ backgroundColor: theme.deepPurple }}
        >
            <Nav
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
                navbar
            >
                <NavItem>
                    <NavLink
                        href="#home"
                        style={{
                            color: theme.vibrantTeal,
                            fontFamily: theme.fontFamily,
                        }}
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#education"
                        style={{
                            color: theme.vibrantTeal,
                            fontFamily: theme.fontFamily,
                        }}
                    >
                        Education
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#skills"
                        style={{
                            color: theme.vibrantTeal,
                            fontFamily: theme.fontFamily,
                        }}
                    >
                        Skills
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#portfolio"
                        style={{
                            color: theme.vibrantTeal,
                            fontFamily: theme.fontFamily,
                        }}
                    >
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#contact"
                        style={{
                            color: theme.vibrantTeal,
                            fontFamily: theme.fontFamily,
                        }}
                    >
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
