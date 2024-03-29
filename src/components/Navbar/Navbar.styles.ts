/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Import Link from react-router-dom
 */
import { Link } from "react-router-dom";

/**
 * Define MobileMenuProps interface
 */
interface MobileMenuProps {
  isOpen: boolean;
}

/**
 * Styles the NavbarContainer
 */
export const NavbarContainer = styled("nav")(() => ({
  backgroundColor: "#0c2e5c ",
  color: "#fff",
  margin: 0,
}));

/**
 * Styles the NavbarWrapper
 */
export const NavbarWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
}));

/**
 * Styles the Logo
 */
export const Logo = styled(Link)(() => ({
  fontSize: "1.5rem",
  textDecoration: "none",
  color: "#fff",
}));

/**
 * Styles the MenuIcon
 */
export const MenuIcon = styled("div")(() => ({
  display: "none",

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    cursor: "pointer",

    ".line": {
      width: "100%",
      height: 2,
      backgroundColor: "#fff",
      marginBottom: 4,
      transition: "background-color 0.3s ease",
    },

    ".active": {
      backgroundColor: "#FFD75E",
    },
  },
}));

/**
 * Styles the Links
 */
export const Links = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,

  "@media (max-width: 768px)": {
    display: "none",
  },

  "> * + *": {
    marginLeft: "1rem",
  },

  a: {
    textDecoration: "none",
    color: "#fff",
    transition: "color 0.3s ease",
    marginRight: "1rem",
    fontSize: 19,

    "&:hover": {
      color: "#ccc",
    },
  },
}));

/**
 * Styles the MobileMenu
 */
export const MobileMenu = styled("div")<MobileMenuProps>(({ isOpen }) => ({
  display: isOpen ? "flex" : "none",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#0c2e5c",
  position: "fixed",
  top: 0,
  left: 0,
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  transition: "opacity 0.3s ease, visibility 0.3s ease",
  zIndex: 998,

  "> * + *": {
    marginTop: "1rem",
  },

  a: {
    textDecoration: "none",
    color: "#fff",
    transition: "color 0.3s ease",

    "&:hover": {
      color: "#ccc",
    },
  },
}));

/**
 * Styles the Menu
 */
export const Menu = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",

  ".icon-line": {
    width: 25,
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 4,
  },

  "@media (min-width: 769px)": {
    display: "none",
  },
}));
