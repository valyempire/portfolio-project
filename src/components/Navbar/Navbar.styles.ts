import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const NavbarContainer = styled("nav")(() => ({
  backgroundColor: "#012867",
  color: "#fff",
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

export const Links = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,

  li: {
    marginLeft: "1rem",

    "@media (max-width: 768px)": {
      marginBottom: "0.5rem",
    },

    a: {
      textDecoration: "none",
      color: "#fff",
      transition: "color 0.3s ease",

      "&:hover": {
        color: "#ccc",
      },
    },
  },

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
