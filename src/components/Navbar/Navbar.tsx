// import { useState } from "react";
// import { Link } from "react-router-dom";

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav>
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           Your Logo
//         </Link>
//         <div
//           className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="menu-icon">
//             <div className="icon-line"></div>
//             <div className="icon-line"></div>
//             <div className="icon-line"></div>
//           </div>
//         </div>
//         <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
//           <li>
//             <Link to="/" onClick={toggleMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={toggleMenu}>
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link to="/work" onClick={toggleMenu}>
//               My Work
//             </Link>
//           </li>
//           <li>
//             <Link to="/skills" onClick={toggleMenu}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={toggleMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavbarWrapper,
  Links,
  Logo,
  Menu,
} from "./Navbar.styles";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to="/">Your Logo</Logo>
        <Menu onClick={toggleMenu}>
          <div className="icon-line"></div>
          <div className="icon-line"></div>
          <div className="icon-line"></div>
        </Menu>
        <Links className={isMenuOpen ? "open" : ""}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={toggleMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </Links>
      </NavbarWrapper>
    </NavbarContainer>
  );
};
