 

import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";

function Type() {
  const typeRef = useRef(null);

  useEffect(() => {
    const instance = new TypeIt(typeRef.current, {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Spring Boot Developer",
        "Problem Solver",
        "AI Enthusiast",
        "Curious & Passionate Learner",
      ],
      speed: 100,
      breakLines: false,
      loop: true,
      cursor: true,
      nextStringDelay: 1500,
    });

    instance.go();

    return () => instance.destroy(); // clean up on unmount
  }, []);

  return (
    <div
      style={{
        color: "#cd5ff8",
        fontSize: "2rem",
        fontWeight: "bold",
        minHeight: "48px", // prevent layout shift
      }}
    >
      <span ref={typeRef}></span>
    </div>
  );
}

export default Type;
