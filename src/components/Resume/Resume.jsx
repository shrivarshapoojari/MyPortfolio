import React, { useState, useEffect } from "react";
 
import Button from "react-bootstrap/Button";
import {Particle} from "../Particle";
import Shrivarsha_Poojary_Resume from "../../assets/Shrivarsha_Resume.pdf";
import resumePreview from "../../assets/resumePreview.png";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async'
function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const wrapperStyles = {
    padding: "80px 20px 40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const cardStyles = {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "800px",
    width: "100%",
  };

  const imageStyles = {
    width: "100%",
    borderRadius: "8px",
    objectFit: "contain",
  };

  const buttonStyles = {
    backgroundColor: "#6c63ff",
    border: "none",
    padding: "10px 25px",
    borderRadius: "30px",
    fontWeight: 600,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "16px",
    marginTop: "25px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
     <Helmet>
     <title>Resume | Shrivarsha Poojary</title>
     <meta name="description" content="View Shrivarsha Poojary's resume. Academic background, technical skills, certifications, and achievements from RV College of Engineering." />
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
    <div>
    
      <Container fluid style={wrapperStyles}>
        <Particle />

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={cardStyles}
        >
          <img
            src={resumePreview}
            alt="Resume Preview"
            style={imageStyles}
          />
        </motion.div>

      
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>        <Button
           variant="primary"
            href={Shrivarsha_Poojary_Resume}
            target="_blank"
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        {/* </motion.div> */}
      </Container>
    </div>
    </>
  );
}

export default Resume;


