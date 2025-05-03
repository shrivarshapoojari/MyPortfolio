import React from "react";
import { Container, Row, Col } from "react-bootstrap";
 
import myphoto from "../../assets/myphoto.png";
import Tilt from "react-parallax-tilt";
import '../../../src/style.css';
import '../../../src/index.css';

import {
  AiFillGithub,
 
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">HERE'S A LITTLE ABOUT ME</span>
            </h1>
            <p className="home-about-body">
              I am Shrivarsha Poojary , a 3rd year CSE student at <b className="purple">RV College of Engineering </b> Bengaluru
              <br/>
              <br/>
              I have a deep passion for <b className="purple">Computer Science</b> and love exploring its core domains.
              <br />
              <br />I have a strong foundation in
              <i>
                <b className="purple"> Operating Systems, Databases, Computer Networks, and other CS Fundamentals.</b>
              </i>
              <br />
              <br />
              Problem-solving excites me, and I enjoy tackling challenging coding problems with a structured approach.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple"> Flask, MERN Stack, and Spring Boot</b>
              </i>, allowing me to build scalable applications.
              <br />
              <br />
              I have experience working with multiple programming languages, including
              <i>
                <b className="purple"> C, C++, Python, and Java</b>
              </i>, with a strong grasp of <b className="purple">Object-Oriented Programming (OOPs)</b>.
              <br />
              <br />
              My interests also extend to <b className="purple">Machine Learning</b> and <b className="purple">Computer Vision</b>, where I explore AI-driven solutions.
              <br />
              <br />
              I am skilled in <b className="purple">DevOps</b> tools like <b className="purple">Docker, Kubernetes, and AWS</b> for efficient deployment and scalability.
              <br />
              <br />
 Apart from tech, I have a keen interest in <b className="purple">financial analysis and studying bussiness strategies.</b>. I enjoy studying market trends, reading industry reports, and focusing on long-term growth strategies that align with sustainable value creation.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myphoto} className="img-fluid" alt="Shrivarsha" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shrivarsha-poojary-960691249/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/shrivarshapoojari"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
               <li className="social-icons">
                            <a
                              href="https://leetcode.com/u/shrivarsha/"
                              className="icon-colour home-social-icons"
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
    </Container>
  );
}

export default Home2;
