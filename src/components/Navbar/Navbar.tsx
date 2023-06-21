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
          <NavLink exact to="/" activeStyle={{ color: "#FFD75E" }}>
            Home
          </NavLink>
          <NavLink exact to="/work" activeStyle={{ color: "#FFD75E" }}>
            My Work
          </NavLink>
          <NavLink exact to="/contact" activeStyle={{ color: "#FFD75E" }}>
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
            activeStyle={{ color: "#FFD75E" }}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/work"
            activeStyle={{ color: "#FFD75E" }}
            onClick={handleLinkClick}
          >
            My Work
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeStyle={{ color: "#FFD75E" }}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </MobileMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};
