import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer,
  NavbarWrapper,
  Links,
  Logo,
  MobileMenu,
  Menu,
} from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to="/">Valerica Bocanel</Logo>

        <Links>
          <NavLink exact to="/" activeStyle={{ color: "#92b7fc" }}>
            Home
          </NavLink>
          <NavLink exact to="/projects" activeStyle={{ color: "#92b7fc" }}>
            Projects
          </NavLink>
          <NavLink exact to="/contact" activeStyle={{ color: "#92b7fc" }}>
            Contact
          </NavLink>
        </Links>

        <Menu onClick={handleMenuToggle}>
          <div className="icon-line"></div>
          <div className="icon-line"></div>
          <div className="icon-line"></div>
        </Menu>

        <MobileMenu isOpen={isMenuOpen}>
          <NavLink
            exact
            to="/"
            activeStyle={{ color: "#92b7fc" }}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/projects"
            activeStyle={{ color: "#92b7fc" }}
            onClick={handleLinkClick}
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeStyle={{ color: "#92b7fc" }}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </MobileMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};
