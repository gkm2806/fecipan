import React, { Component } from 'react';
import Card from './../ui/Card.jsx';

export default class Sobre extends Component {
  render() {
    return (
      <div classNameName="Container text-center">
          <h1> O que é FECIPAN?</h1>
            <div className="sobreCA">
              <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                  <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="http://www.ifms.edu.br/assuntos/eventos/feiras/galeria-de-fotos/feiras-de-ciencia-e-tecnologia-2016/feiras-de-ciencia-e-tecnologia-2016-4/@@images/a4d333a2-6cf2-4f96-b6fd-89919e52746d.jpeg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="http://www.ifms.edu.br/assuntos/eventos/feiras/galeria-de-fotos/feiras-de-ciencia-e-tecnologia-2016/feiras-de-ciencia-e-tecnologia-2016-22/@@images/85361a0f-6435-4b27-a794-98a3c13dd9c6.jpeg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="http://www.ifms.edu.br/assuntos/eventos/feiras/galeria-de-fotos/feiras-de-ciencia-e-tecnologia-2016/feiras-de-ciencia-e-tecnologia-2016-5/@@images/e4827501-62c9-48df-8310-5fdc9b9a8ef9.jpeg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
      </div>
    );
  }
};
