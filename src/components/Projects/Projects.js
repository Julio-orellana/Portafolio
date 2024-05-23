import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import login from "../../Assets/Projects/Login.png";
import cart from "../../Assets/Projects/Cart.png";
import postal from "../../Assets/Projects/Postal.png";
import eyc from "../../Assets/Projects/EYC.png";
import calendar from "../../Assets/Projects/Calendar.png";
import cl from "../../Assets/Projects/c&l.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos de los proyectos que he trabajado dentro y fuera de la U.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={eyc}
              isBlog={false}
              title="EYC APP"
              description={
                <p>Proyecto Final de la clase Algoritmos y Programacion Basica en UVG. 
                <br />Este proyecto fue realizado con tecnologias web como HTML, CSS y JAVASCRIPT, y sobre todo, gestionando la logica del servidor con PYTHON. </p>
               }
              ghLink="https://github.com/Julio-orellana/Proyecto-Final"

            />
          </Col>

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
              isBlog={true}
              title="Calendario de Lectura"
              description={
                <p>App que ayuda a incentivar la lectura en personas que no tienen este habito."
                  <br /> Proyecto hecho en clase de Introduccion a Ingenieria en Ciencias de Computación
                 </p>   
              }
              demoLink="https://docs.google.com/document/d/1j364qOp-bgBG8sAEAY_iBfpbuJP1cI9zYwKrayOh_NI/edit?usp=sharing"
  
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cl}
              isBlog={true}
              title="Proyecto Final comunicacion efectiva"
              description={
                <p>
                  <strong>Panel de discusion sobre:</strong>
                  <i> El impacto de las redes sociales en la salud mental.</i>
                  <br />
                  Proyecto hecho en clase de Comunicacion Efectiva en la UVG.
                </p>
              }
              demoLink="https://docs.google.com/document/d/1U-lhSk5W5W1mzSif5zVOtclbjRORc3XL/edit?usp=sharing&ouid=116860498670762744331&rtpof=true&sd=true"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
