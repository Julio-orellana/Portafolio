import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Al principio de la  <span className="purple">Universidad </span>
            sabia que la primera clase de programacion seria sencilla para mi, ya que tenia un poco de conocimiento sobre el tema a pesar de no saber nada del lenguaje que veria en clase: <span className="purple"> Python.</span>
            <br />
            Como lo esperaba la clase se me hizo muy sencilla, sin embargo aprendi la habilidad de realizar analisis y Diseño a traves de diagramas de flujo y pseudocodigo.
            <br />
            <br />
            Sin embargo, la clase de <span className="purple">Pensamiento Cuantitativo</span> fue un poco mas complicada de lo que esperaba haciendo que me causara problemas durante todo el semeste.
            <br />
            <br />
            Tambien, <span className="purple">aprendi</span> a realizar analisis de datos y a realizar operaciones matematicas de una forma mas eficiente, a la vez aprendi a trabajar colaborativamente y dirigir a un equipo de trabajo.
            <br />
            <br />
            <span className="purple">A pesar de</span> que aprendi varias cosas, me deja con dudas el expandir mi conocimiento en <span className="purple">Python</span> para poder explora la capacidad del mismo.
            <br />
            <br />
            <span className="purple">Lo que aprendi:</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Matematica
            </li>
            <li className="about-activity">
              <ImPointRight /> Quimica
            </li>
            <li className="about-activity">
              <ImPointRight /> Python
            </li>
            <li className="about-activity">
              <ImPointRight /> Analis y Diseño / Design Thinking
            </li>
          </ul>
        </blockquote>
        <br />
        <hr style={{height:"1em", color:"#FFFFFF"}} />
        <br />
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Como fue mi Primer Semestre en<strong className="purple"> UVG</strong>
            </h1>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            A pesar de todas las complicaciones que tuve durante el semestre en <span className="purple"> UVG,</span> logre adaptarme a la universidad y a la forma de trabajo que se requiere para poder tener un buen rendimiento.
            <br />
            Logre crear un grupo de trabajo con el cual me siento comodo y con el cual puedo trabajar de una forma eficiente,
            distribuyendo las tareas de una forma equitativa y logrando un buen rendimiento y resultados en las mismas.
            <br />
            Tambien apredni que a cambiar mi <span className="purple">forma de estudio</span> y a adaptarme a las necesidades y velocidad de <span className="purple">UVG</span>.
            <br />
            Tengo como objetivos a medio y largo plazo poder completar la carrera de <span className="purple">Computer Science</span> y poder trabajar en una empresa de tecnologia como desarollador.
            <br />
            Aunque actualmente soy <span className="purple">desarollador FULL-STACK</span>, quiero conocer otras areas del desarrollo como: <span className="purple">
              <ul>
              <li>Desarrollo de software</li>
              <li>Desarrollo de videojuegos</li>
              <li>Desarrollo IOS con swift</li>
              <li>Machine Learning y Data Science</li>
              <li>Testing</li>
              <li>Arquitectura de software</li>
              </ul>
              </span>
              Sobre la decision que tome al estudiar <span className="purple">Computer Science</span> fue por que me gusta la programacion y la tecnologia, por lo que estoy satisfecho con la decision que tome y no pienso cambiar de carrera en el futuro
              ya que esta carrera me ayudara a potencias mis habilidades como <span className="purple">desarollador.</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
