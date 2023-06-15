import { NavLink } from "react-router-dom";
import { NavbarContainer, NavbarWrapper, Links, Logo } from "./Navbar.styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to="/">Bocanel Valerica</Logo>

        <Links>
          <NavLink exact to="/" activeStyle={{ color: "#ffd75e" }}>
            Home
          </NavLink>
          <NavLink exact to="/about" activeStyle={{ color: "#ffd75e" }}>
            About Me
          </NavLink>
          <NavLink exact to="/work" activeStyle={{ color: "#ffd75e" }}>
            My Work
          </NavLink>
          <NavLink exact to="/skills" activeStyle={{ color: "#ffd75e" }}>
            Skills
          </NavLink>
          <NavLink exact to="/contact" activeStyle={{ color: "#ffd75e" }}>
            Contact
          </NavLink>
        </Links>
      </NavbarWrapper>
    </NavbarContainer>
  );
};
