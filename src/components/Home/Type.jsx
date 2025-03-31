import React from "react";
import TypeIt from "typeit-react";

function Type() {
  return (
    <TypeIt
      options={{
        strings: [
          "MERN Stack Developer",
          "Spring Boot Developer",
          "Full Stack Developer",
          "Problem Solver",
          "AI Enthusiast",
          "Curious & Passionate Learner"
        ],
        speed: 100,
        breakLines: false,
        loop: true,
        cursor: true,
        waitUntilVisible: true,
        nextStringDelay: 1500,
      }}
      
    />
  );
}

export default Type;