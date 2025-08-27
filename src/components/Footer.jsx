import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shrivarsha Poojary</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="https://linkedin.com/in/shrivarsha-poojary-960691249/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/shrivarshapoojari"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://blog.shrivarshapoojary.in/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <FaBlog/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/shrivarsha/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
           <SiLeetcode />
              </a>
            </li>
          
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
