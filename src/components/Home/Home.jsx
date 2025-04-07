import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo  from "../../assets/home-main.svg";
import { Particle } from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
    

    <Helmet>
        <title>Shrivarsha Poojary | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. I'm a student at RVCE Bengaluru, passionate about web development and AI." />
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


    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHRIVARSHA POOJARY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    </>
  );
}

export default Home;
