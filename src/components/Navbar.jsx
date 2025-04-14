// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../assets/logo.png"
// import Button from "react-bootstrap/Button";
// import { GrCertificate } from "react-icons/gr";
// import { Link } from "react-router-dom";
 
// import { GrContact } from "react-icons/gr";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/" className="d-flex">
//           <img src={logo} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//             <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>  

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Projects
//               </Nav.Link>
//             </Nav.Item>
            
//             <Nav.Item>
//             <Nav.Link
//                 as={Link}
//                 to="/certifications"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <GrCertificate style={{ marginBottom: "2px" }} /> Certifications
//               </Nav.Link>
//             </Nav.Item>  

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 onClick={() => updateExpanded(false)}
//               >
            
//                 <GrContact style={{ marginBottom: "2px",  marginRight:"5px"}} />Contact
//               </Nav.Link>
//             </Nav.Item>




// {
//     //Blogs to be added aftrer blog is done
// }
//             {/* <Nav.Item>
//               <Nav.Link
//                 href=""
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <ImBlog style={{ marginBottom: "2px" }} /> Blogs
//               </Nav.Link>
//             </Nav.Item> */}

//             {/* <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/shrivarshapoojari/MyPortfolio"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


  
 

import { useState, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import logo from "../assets/logo.png"
import { GrCertificate } from "react-icons/gr"
import { Link } from "react-router-dom"
import { GrContact } from "react-icons/gr"
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"
import { ImBlog } from "react-icons/im"
import { FiChevronDown } from "react-icons/fi"

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  useEffect(() => {
    // Check if screen is mobile on initial load
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  function checkMobile() {
    setIsMobile(window.innerWidth < 768)
  }

  window.addEventListener("scroll", scrollHandler)

  // Mobile view menu items
  const mobileMenuItems = (
    <>
      <Nav.Item>
        <Nav.Link as={Link} to="/certifications" onClick={() => updateExpanded(false)}>
          <GrCertificate style={{ marginBottom: "2px" }} /> Certifications
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
          <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/blog" onClick={() => updateExpanded(false)}>
          <ImBlog style={{ marginBottom: "2px" }} /> Blogs
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
          <GrContact style={{ marginBottom: "2px", marginRight: "5px" }} /> Contact
        </Nav.Link>
      </Nav.Item>
    </>
  )

  // Desktop dropdown menu
  const desktopDropdown = (
    <NavDropdown
      title={
        <span className="dropdown-title">
          More <FiChevronDown className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`} />
        </span>
      }
      id="nav-dropdown"
      onToggle={(isOpen) => setDropdownOpen(isOpen)}
    >
      <NavDropdown.Item
        as={Link}
        to="/certifications"
        onClick={() => updateExpanded(false)}
        style={{
          color: "white",
          backgroundColor: "#181a27",
          display: "flex",
          alignItems: "center",
        }}
      >
        <GrCertificate style={{ marginRight: "8px" }} /> Certifications
      </NavDropdown.Item>

      <NavDropdown.Item
        as={Link}
        to="/resume"
        onClick={() => updateExpanded(false)}
        style={{
          color: "white",
          backgroundColor: "#181a27",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CgFileDocument style={{ marginRight: "8px" }} /> Resume
      </NavDropdown.Item>

      <NavDropdown.Item
        as={Link}
        to="/blog"
        onClick={() => updateExpanded(false)}
        style={{
          color: "white",
          backgroundColor: "#181a27",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ImBlog style={{ marginRight: "8px" }} /> Blogs
      </NavDropdown.Item>

      <NavDropdown.Item
        as={Link}
        to="/contact"
        onClick={() => updateExpanded(false)}
        style={{
          color: "white",
          backgroundColor: "#181a27",
          display: "flex",
          alignItems: "center",
        }}
      >
        <GrContact style={{ marginRight: "8px" }} /> Contact
      </NavDropdown.Item>
    </NavDropdown>
  )

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo || "/placeholder.svg"} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded")
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {isMobile ? mobileMenuItems : desktopDropdown}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
