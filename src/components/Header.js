import { useContext } from 'react';
import { Navbar, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';
const Header = () => {
    const theme = useContext(ThemeContext);
    return (
        <Navbar
            expand="md"
            fixed="top"
            style={{ backgroundColor: theme.deepPurple }}
        >
            <Container>
                <Nav className="d-flex justify-content-center" navbar>
                    <NavItem>
                        <NavLink
                            href="#home"
                            style={{ color: theme.vibrantTeal }}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#about"
                            style={{ color: theme.vibrantTeal }}
                        >
                            About
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            href="#education"
                            style={{ color: theme.vibrantTeal }}
                        >
                            Education
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#portfolio"
                            style={{ color: theme.vibrantTeal }}
                        >
                            Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#contact"
                            style={{ color: theme.vibrantTeal }}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
