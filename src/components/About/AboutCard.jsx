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
            I am  a Final year CSE Student at a  RV College of Engineering Bengaluru.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs <a href="https://blog.shrivarshapoojary.in/" target="_blank" rel="noopener noreferrer" className="purple" style={{ marginLeft: '6px', fontWeight: 500, textDecoration: 'underline dotted' }}>Visit</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Financial Trends
            </li>
            <li className="about-activity">
              <ImPointRight />Experimenting with Emerging Technologies
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
         "Dont cry in the the corner if you want something, work hard, become the best and snatch it!" {" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



