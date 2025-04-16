import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello , I am <span className="purple">Shrivarsha Poojary </span>
            from <span className="purple"> Bengaluru</span>
            <br />
            I am  a 3rd year CSE Student at a  RV College of Engineering Bengaluru.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />  Stock Research
            </li>
            <li className="about-activity">
              <ImPointRight />  Investing 
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
         "Dont cry in the the corner if you want something, work hard, become the best and snatch it!" {" "}
          </p>
          <footer className="blockquote-footer">Shrivarsha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



