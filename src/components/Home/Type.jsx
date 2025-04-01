 
// export default Type;

 
import React from "react";
import TypeIt from "typeit-react";

function Type() {
  return (
    <div style={{ color: "#cd5ff8", fontSize: "2rem", fontWeight: "bold" }}>
      <TypeIt
        options={{
          strings: [
            "MERN Stack Developer",
            "Spring Boot Developer",
            "Full Stack Developer",
            "Problem Solver",
            "AI Enthusiast",
            "Curious & Passionate Learner",
          ],
          speed: 100,
          breakLines: false,
          loop: true,
          cursor: true,
          waitUntilVisible: true,
          nextStringDelay: 1500,
        }}
      />
    </div>
  );
}

export default Type;
