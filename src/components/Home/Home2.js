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
              MI CONCEPCION SOBRE <span className="purple">CIENCIAS DE LA COMPUTACION </span>
            </h1>
            <p className="home-about-body">
            Las ciencias de la computación o ciencias de la informática son las que se ocupan del estudio de la computación, información y automatización.
              <br />
              <br />Una de las dudas mas comunes cuando se habla de esta carrera es:
              <i>
                <b className="purple"> que hace un cientifico de la computacion </b>
              </i> y la respuesta es simple: los cientificos de la computacion realizan investigaciones sobre los fundamentos de las ciencias de la 
              <b className="purple"> computacion. </b> 
              <br />
              <br />
              Tambien, los cientificos de computacion, desarrollan soluciones para problemas relacionados con programas de
              <b className="purple"> hardware </b> y <b className="purple"> software </b>  de computación.
              <br />
              <br />
              Mi futuro en las <b className="purple">Ciencias de la computacion</b> y como <b className="purple">Desarrollador de Software: </b>
              <br />
              Aunque las ciencias de la computación son un campo muy amplio, mi enfoque principal es el desarrollo de software ya que es la rama que siempre me ha llamaado la atencion desde pequeño.
              <br />
              <br />
              Lo que hace que el <b className="purple">desarrollo de software </b> sea tan interesante para mi es que es un campo en constante evolución, lo que significa que siempre hay algo nuevo que aprender.
              <br />
              <b className="purple">Ademas,</b> siempre me ha llamado la atencion: <i>crear algo que no existe, innovar y comprender como es que funcionan los software a gran escala tales como:</i>
              <br />
              <ul>
                <b className="purple">
                <li>Redes Sociales</li>
                <li>Videojuegos</li>
                <li>Software de Streaming</li>
                <li> Sistemas Financieros</li>
                </b>
              </ul> 
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
