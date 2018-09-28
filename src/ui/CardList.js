import React, { Component } from 'react';
import Projetos from './Projetos.js'

export default class CardList extends Component {
  render(){
    return (
      <div className="container text-center border border-light p-2">
        <p className="h4 mb-4">Lista de Projetos</p>
          {this.props.projetos.map((projeto, index) =>{
            return(
              <Projetos local={projeto.local} nome={projeto.nome} nivel={projeto.nivel} pontos={projeto.pontos} />
            );
          })};
      </div>
    );
  }
};
