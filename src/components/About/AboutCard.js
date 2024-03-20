import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Julio Orellana </span>
            tengo 18 años y soy de <span className="purple"> Guatemala, Guatemala .</span>
            <br />
            Estudie mi diversificado en un colegio plan fin de semana en Escuintla, también estudie varios cursos en INTECAP de Santa Lucía Cotz. entre ellos: IT essentials, IOT e internet de las cosas, Tecnico en reparación y mantenimiento a sistemas informáticos, Networking essentials entre muchos otros.
            <br />
            Aspiro a ser ingeniero en Ciencias de Computación ya que desde los 12 años me propuse la meta de ser Desarrollador de software algún día, espero mejorar mis habilidades como desarrollador web y como desarrollador de aplicaciones durante el transcurso de esta etapa universitaria.
            <br />
            <br />
            Aparte de programar estas son otras actividades que me gustan hacer 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Escuchar Musica
            </li>
            <li className="about-activity">
              <ImPointRight /> Salir con amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Quiero desarrollar nuevas tecnologias que le pemitan a las personas programar de una forma mas facil.{" "}
          </p>
          <footer className="blockquote-footer">JULIO</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
