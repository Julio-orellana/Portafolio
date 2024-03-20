import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              RESUMEN DE LA PRIMERA PARTE DEL PRIMER <span className="purple"> SEMESTRE </span> EN LA U
            </h1>
            <p className="home-about-body">
              Desde un principio sabia que la carrera de Computer Science era la que me gustaba y sabia que una de mis clases faoritas seria la de programacion
              <br />
              <br />Cuando inicie tenia muchos problemas comprendiendo temas de 
              <i>
                <b className="purple"> Matematica y Quimica, </b>
              </i> aunque siguen siendo un problema debido a su grado de dificultad considero que he conseguido adaptarme lo suficiente.
              <br />
              <br />
              Algo que he aprendido mas alla de los temas profesionales que mi carrera enseña es que si quiero obtener buenos resultados debo  &nbsp;
              <i>
                <b className="purple">ESFORZARME MAS </b> y 
                adaptarme al &nbsp;
                <b className="purple">
                  Cambio &nbsp;
                </b> 
                que esto implica.
              </i>
              <br />
              <br />
              Lo que me sigo preguntando es: &nbsp;
              <b className="purple">¿Que hubiera pasado? </b>
              si antes de empezar el ciclo hubiera dedicado mas
              <i>
                <b className="purple">
                  {" "}
                  Tiempo
                </b>
              </i>
              &nbsp; a estudiar los temas que eran 
              <i>
                <b className="purple"> Nuevos </b>
                para mi.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN </h1>
            <p>
              Puedes <span className="purple">contactarme </span> por aqui
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Julio-orellana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Je_og05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/julio-orellana-b59992238"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juli.o5_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
