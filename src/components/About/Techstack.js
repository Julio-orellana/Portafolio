import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      
    </Row>
  );
}

export default Techstack;
