import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Particle} from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from  "../../assets/about.png"
import Leetcode from "./Leetcode";
import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <>
    <Helmet>
    <title>About | Shrivarsha Poojary</title>
    <meta name="description" content="Know more about Shrivarsha Poojary, a student from RVCE Bengaluru with a passion for development and innovation." />
        <meta name="keywords" content="Shrivarsha, Poojary, RVCE, Portfolio, Developer, React, AI" />
        <meta name="author" content="Shrivarsha Poojary" />
        <meta property="og:title" content="Shrivarsha Poojary | Portfolio" />
        <meta property="og:description" content="Check out my projects, skills, and achievements!" />
        <meta property="og:image" content="https://www.shrivarshapoojary.in/logo.png" />
        <meta property="og:url" content="https://www.shrivarshapoojary.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shrivarsha Poojary | Portfolio" />
        <meta name="twitter:description" content="Check out my work, skills, and more." />
        <meta name="twitter:image" content="https://www.shrivarshapoojary.in/logo.png" />
      </Helmet>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <Github />
        <Leetcode/>
       
      
     
      </Container>
    </Container>
    </>
  );
}

export default About;
