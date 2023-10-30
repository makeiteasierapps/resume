import { useContext } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
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
                    fontFamily: theme.mainText,
                    color: theme.lightBlue,
                    fontSize: 'clamp(10px, 3vw, 20px)', // change this line
                }}
                navbar
            >
                <NavItem>
                    <NavLink
                        href="#home"
                        style={{
                            color: theme.lightBlue,
                        }}
                    >
                        HOME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#education"
                        style={{
                            color: theme.lightBlue,
                        }}
                    >
                        EDUCATION
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#skills"
                        style={{
                            color: theme.lightBlue,
                        }}
                    >
                        SKILLS
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#portfolio"
                        style={{
                            color: theme.lightBlue,
                        }}
                    >
                        PORTFOLIO
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#contact"
                        style={{
                            color: theme.lightBlue,
                        }}
                    >
                        CONTACT
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
