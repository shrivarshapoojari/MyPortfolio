 

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import {
  SiC,
  SiExpress,
  SiMysql,
  SiSpringboot,
  SiFlask,
  SiFastapi,
 
  SiPrimereact,
  SiDaisyui,
  SiDocker,
  SiKubernetes,
  SiGithub,
 
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiTensorflow,
  SiTailwindcss,
} from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
function Techstack() {
  const techs = [
    { icon: <SiC />, name: "C" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon:  <SiPostman />, name: "Postman" },
    { icon:  <FaFigma />, name: "Figma" },
   
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
 
   
    { icon:  <SiMui />, name: "Material UI" },
    { icon: <SiPrimereact />, name: "PrimeReact" },
    { icon: <SiDaisyui />, name: "DaisyUI" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <SiTensorflow />, name: "Machine Learning" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
