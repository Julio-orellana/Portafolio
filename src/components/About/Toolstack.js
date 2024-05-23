import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { FaGithub, FaNpm } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { DiOnedrive } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGoogleDrive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOnedrive />
      </Col>
    </Row>
  );
}

export default Toolstack;
