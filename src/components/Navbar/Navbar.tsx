import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer,
  NavbarWrapper,
  Links,
  Logo,
  Menu,
} from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to="/">Bocanel Valerica</Logo>
        <Menu onClick={toggleMenu}>
          <div className="icon-line"></div>
          <div className="icon-line"></div>
          <div className="icon-line"></div>
        </Menu>
        <Links className={isMenuOpen ? "open" : ""}>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/about"
              onClick={toggleMenu}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/work"
              onClick={toggleMenu}
            >
              My Work
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/skills"
              onClick={toggleMenu}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/contact"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </Links>
      </NavbarWrapper>
    </NavbarContainer>
  );
};
