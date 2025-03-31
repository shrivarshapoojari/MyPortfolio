import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import '../../../src/style.css';
import '../../../src/index.css';

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
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
              Apart from tech, I have a keen interest in <b className="purple">finance and investing</b>. I analyze stock fundamentals, read investor meet concalls, and invest in quality stocks for the long term.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
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
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
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
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
