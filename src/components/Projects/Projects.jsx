import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 
import clearzone from "../../assets/Projects/clearzone.png";
import rechat from "../../assets/Projects/rechat.png";

 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clearzone}
              isBlog={false}
              title="ClearZone AI"
              description= "ClearZoneAI is an AI-powered workplace safety management system that prevents accidents in factories through real-time monitoring and alerts. It detects PPE violations, falls, spills, forklift overspeeding, fire risks, and unsafe behaviors. The system features gesture-based emergency alerts and an evacuation management module for trapped employees. It was built using YOLO, OpenCV, MediaPipe, Flask, and React."
              ghLink="https://github.com/shrivarshapoojari/Clear-Zone-Ai"
              demoLink="https://youtu.be/RQ-8UtxbG1k?si=Y3kA9VB68oxoFCS8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rechat}
              isBlog={false}
              title="Rechat"
              description="ReChat is a real-time chat application built with the MERN stack and Socket.io, offering seamless messaging with WebSockets. It features OTP-based authentication, file sharing, friend requests, and group chats. Users can enjoy responsive search, typing indicators, and instant message alerts. The UI is built with React and MUI for an intuitive experience."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://rechaat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rechat}
              isBlog={false}
              title="Rechat"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://rechaat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rechat}
              isBlog={false}
              title="Rechat"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://rechaat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rechat}
              isBlog={false}
              title="Rechat"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://rechaat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rechat}
              isBlog={false}
              title="Rechat"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://rechaat.vercel.app/"
            />
          </Col>

        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
