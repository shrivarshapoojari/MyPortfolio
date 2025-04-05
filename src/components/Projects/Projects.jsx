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
import credit from "../../assets/Projects/credit.png"
import mld from "../../assets/Projects/mld.png"
import nimmayatri from "../../assets/Projects/nimmayatri.png"
import springflow from "../../assets/Projects/springflow.png"
import springify from "../../assets/Projects/springify.png"




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
              git={false}
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              isBlog={false}
              git={true}
              title="CreditGuard"
              description="CreditGuard is a machine learning-powered system built with Flask to predict credit card defaults based on user financial data. It analyzes factors like transaction history, credit utilization, and payment behavior to assess default risk. The model helps financial institutions make informed lending decisions and reduce financial risks. CreditGuard enhances credit assessment with accurate, data-driven predictions."
              ghLink="https://github.com/shrivarshapoojari/Credit-Card-Default-Prediction"
              demoLink="https://credit-card-default-prediction-vwuu.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springflow}
              isBlog={false}
              git={true}
              title="SpringFlow"
              description="SpringFlow is a project management REST API built with Spring Boot, enabling efficient task tracking and collaboration. It allows users to create projects, assign issues, track progress, chat, and comment on tasks. The API supports updating completion status and managing workflows seamlessly. It features three subscription models that limit the number of projects users can create. SpringFlow enhances project organization with structured issue management and real-time collaboration."
              ghLink="https://github.com/shrivarshapoojari/SpringFlow"
              demoLink= ""
            />
          </Col>


  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springify}
              isBlog={false}
              git={true}
              title="Springify"
              description="SpringFlow is a project management REST API built with Spring Boot, enabling efficient task tracking and collaboration. It allows users to create projects, assign issues, track progress, chat, and comment on tasks. The API supports updating completion status and managing workflows seamlessly. It features three subscription models that limit the number of projects users can create. SpringFlow enhances project organization with structured issue management and real-time collaboration."
              ghLink="https://github.com/shrivarshapoojari/SpringFlow"
              demoLink= ""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nimmayatri}
              isBlog={false}
              git={true}
              title="Nimma Yatri"
              description="Nimma Yatri is an intelligent ride allocation platform built with React and Node, designed to optimize ride distribution and driver earnings. It uses a priority queue system for fair ride assignment based on proximity and availability, reducing denials. A greedy graph algorithm forecasts smart earnings, guiding drivers toward high-demand zones. The Aura Points system rewards drivers for challenging rides and discourages cancellations, ensuring better engagement and balanced supply-demand dynamics."
              ghLink="https://github.com/shrivarshapoojari/Nimma-Yatri"
              demoLink= ""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mld}
              isBlog={false}
              git={true}
              title="Memory Leak Detector"
              description="MemoryLeakDetection Tool is a C-based memory analysis library designed to detect memory leaks in programs that use dynamic memory allocation. Built using custom memory functions like xcalloc and xfree, it maintains internal databases to track structures and objects created at runtime. The tool uses a graph traversal algorithm to identify unreachable memory blocks—leaked objects—and reports them for cleanup. Developed using low-level system calls like mmap, it helps improve software stability by preventing memory depletion and application crashes."
              ghLink="https://github.com/shrivarshapoojari/MLD"
              demoLink= ""
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
