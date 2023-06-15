import { NavLink } from "react-router-dom";
import { NavbarContainer, NavbarWrapper, Links, Logo } from "./Navbar.styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to="/">Bocanel Valerica</Logo>

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
      </NavbarWrapper>
    </NavbarContainer>
  );
};
