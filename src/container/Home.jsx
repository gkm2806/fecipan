import React, { Component } from 'react';
import Card from './../ui/Card.jsx';

export default class Home extends Component {
  render() {
    return (
      <div className="Container text-center">
        <main>
          <Card text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} photo={"http://www.ifms.edu.br/assuntos/eventos/feiras/galeria-de-fotos/feiras-de-ciencia-e-tecnologia-2016/feiras-de-ciencia-e-tecnologia-2016-4/@@images/a4d333a2-6cf2-4f96-b6fd-89919e52746d.jpeg"}/>
          <Card text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} photo={"http://www.ifms.edu.br/assuntos/eventos/feiras/galeria-de-fotos/feiras-de-ciencia-e-tecnologia-2016/feiras-de-ciencia-e-tecnologia-2016-2/@@images/9c82f7b2-d0bd-46c5-84a9-7d3f9dd0258e.jpeg"} />
          <Card text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} photo={"http://www.ifms.edu.br/assuntos/eventos/feiras/galeria-de-fotos/feiras-de-ciencia-e-tecnologia-2016/feiras-de-ciencia-e-tecnologia-2016-21/@@images/da23c04b-c5cc-4356-a3bf-17d16bab6d50.jpeg"} />
          <Card text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} photo={""} />
        </main>
      </div>
    );
  }
};
