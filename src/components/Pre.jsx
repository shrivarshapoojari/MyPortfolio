 

import React from "react";
import pre from "../assets/pre.svg"
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <img src={pre}  alt="Loading..." />
    </div>
  );
}

export default Pre;
