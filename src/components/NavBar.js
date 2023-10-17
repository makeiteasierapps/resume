import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/NavBar.css';

const NavBar = ({ toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('AboutMe');

  return (
    <Nav className="NavBar">
      {['AboutMe', 'Skills', 'Experience', 'Education', 'Portfolio', 'ContactMe'].map(section => (
        <NavItem key={section}>
          <NavLink href={`#${section}`} active={activeSection === section}>{section}</NavLink>
        </NavItem>
      ))}
      <div className="dark-mode-toggle">
        <label>
          Dark Mode
          <input type="checkbox" onChange={toggleDarkMode} />
        </label>
      </div>
    </Nav>
  );
}

export default NavBar;
