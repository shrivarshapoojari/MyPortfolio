import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">Contributions</strong>
      </h1>
      <GitHubCalendar
        username="shrivarshapoojari"
        blockSize={19}
        blockMargin={5}
        color="#39d353"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
