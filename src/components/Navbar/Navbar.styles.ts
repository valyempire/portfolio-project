import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const NavbarContainer = styled("nav")(() => ({
  backgroundColor: "#3c416d",
  color: "#fff",
  margin: 0,
}));

export const NavbarWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const Logo = styled(Link)(() => ({
  fontSize: "1.5rem",
  textDecoration: "none",
  color: "#fff",
}));

export const Menu = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  ".icon-line": {
    width: "25px",
    height: "2px",
    backgroundColor: "#fff",
    marginBottom: "4px",
  },

  "@media (min-width: 769px)": {
    display: "none",
  },
}));

export const Links = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,

  "> * + *": {
    marginLeft: "1rem",
  },

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",

    "> * + *": {
      marginBottom: "0.5rem",
    },
  },

  a: {
    textDecoration: "none",
    color: "#fff",
    transition: "color 0.3s ease",
    marginRight: 25,

    "&:hover": {
      color: "#ccc",
    },
  },
}));
