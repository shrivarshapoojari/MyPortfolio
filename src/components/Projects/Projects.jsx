import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 
import clearzone from "../../assets/Projects/clearzone.png";
import rechat from "../../assets/Projects/rechat.png";
import logify from "../../assets/Projects/logify.png";
import mernera from "../../assets/Projects/mernera.png";
import cloudnote from "../../assets/Projects/cloudnote.png";
import krushi from "../../assets/Projects/krushi.png";
import tablescribe from "../../assets/Projects/tablescribe.png"
import predecem from "../../assets/Projects/predcem.png"

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
              git={true}
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
              git={true}
              title="ReChat"
              description="ReChat is a real-time chat application built with the MERN stack and Socket.io, offering seamless messaging with WebSockets. It features OTP-based authentication, file sharing, friend requests, and group chats. Users can enjoy responsive search, typing indicators, and instant message alerts. The UI was built with React and MUI for an intuitive experience."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://rechaat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logify}
              isBlog={false}
              git={false}
              title="Logify"
              description="Logify is a Unity-based 3D logic gate simulator built with C#, enabling students to explore digital electronics interactively. It supports basic, universal gates, and MSI components like multiplexers and decoders. The 3D environment provides learning resources, including descriptions and logic tables. This immersive tool enhances understanding through hands-on simulations."
              ghLink="https://github.com/shrivarshapoojari/ReChat"
              demoLink="https://shrivarsha.itch.io/logify"
            />
          </Col>
          




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernera}
              isBlog={false}
              git={true}
              title="MERNERA"
              description="MERNERA is a SAAS platform where institutes create and assign courses to instructors, who can upload lectures and quizzes. Students can subscribe to courses, attend quizzes, and learn at their own pace. A live chat feature allows real-time query resolution with instructors. The platform ensures secure payments using Stripe for course subscriptions. It provides a seamless learning experience with structured course management."
              ghLink="https://github.com/shrivarshapoojari/MerneraV2"
              demoLink="https://mernera.vercel.app/"
            />
          </Col>





          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudnote}
              isBlog={false}
              git={true}
              title="CloudNote"
              description="CloudNote is an online note-taking system built with Spring Boot and React, focusing on secure authentication and user management. It implements Spring Security with GitHub OAuth and multi-factor authentication using Google Authenticator. A custom logger tracks all user activities, ensuring detailed event logging. Admins can monitor user registrations, note creation, and system logs. They also have control over enabling or disabling user accounts for enhanced security."
              ghLink="https://github.com/shrivarshapoojari/CloudNote-Spring"
              demoLink=""
            />
          </Col>





          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krushi}
              isBlog={false}
              git={true}
              title="KrushiMitra"
              description="Krushi Mitra is a smart farming solution built with Flask, React, Gemini AI, and TensorFlow, offering personalized crop recommendations. Farmers can detect plant diseases by uploading leaf images and receive analysis in their preferred language. It predicts crop yield, estimates water requirements, and suggests fertilizers for optimal growth. The platform also provides links to buy recommended fertilizers online. AI-powered insights enhance agricultural decision-making for better productivity."
              ghLink="https://github.com/shrivarshapoojari/KrushiMitra"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tablescribe}
              isBlog={false}
              git={true}
              title="TableScribe"
              description="TableScribe is a table extraction tool built with Microsoft Table Transformer, React, and Flask, designed to digitize tabular data. It converts raw tables from scanned or digital images into Excel format with high accuracy. The system enhances document processing by automating table detection and extraction. It outperforms traditional tools like Excalibur and Camelot, which struggle with scanned images. TableScribe simplifies data conversion, making old records easily accessible and editable."
              ghLink="https://github.com/shrivarshapoojari/TableScribe"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predecem}
              isBlog={false}
              git={true}
              title="Predecem"
              description="Predecem is a machine learning-powered tool built with Flask to predict concrete strength based on various material parameters. It analyzes input features like cement composition, water ratio, and curing time to provide accurate strength estimates. The model helps engineers and builders optimize material selection for better durability. Predecem enhances construction planning by offering data-driven strength predictions."
              ghLink="https://github.com/shrivarshapoojari/Predecem"
              demoLink="https://cementstrengthpredictor.onrender.com/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
