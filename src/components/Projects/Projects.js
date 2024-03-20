import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import login from "../../Assets/Projects/Login.png";
import cart from "../../Assets/Projects/Cart.png";
import postal from "../../Assets/Projects/Postal.png";
import calendar from "../../Assets/Projects/Calendar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is the most recent projects i've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Carrito de compras"
              description="Carrito de compras con pasarela de pago (PayPal), hecho con JavaScript y C#."
              ghLink="https://github.com/Julio-orellana/CarritoDeCompras"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postal}
              isBlog={false}
              title="Postal con Turtle"
              description={
                <p>App que dibuja un paisaje dentro de una postal para incentivar el turismo en Guatemala, hecho con python. 
                <br />Proyecto hecho en clase de Algoritmos y Programacion Basica en UVG </p>
               }
              ghLink="https://github.com/Julio-orellana/PostalTurtle"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="Calendario de Lectura"
              description={
                <p>App que ayuda a incentivar la lectura en personas que no tienen este habito."
                  <br /> Proyecto hecho en clase de Introduccion a Ingenieria en Ciencias de Computación
                 </p>   
              }
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Diseño de Login"
              description="Diseño interactivo para un login, hecho con HTML y CSS"
              ghLink="https://github.com/Julio-orellana/Login"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
