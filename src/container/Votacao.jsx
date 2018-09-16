import React, { Component } from 'react';
import Card from './../ui/Card';

export default class Votacao extends Component {
  render() {
    return (
      <div className="Container text-center">
        <table className="table table-hover">
          <thead className="green white-text">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Localização</th>
              <th scope="col">Area</th>
              <th scope="col">nivel</th>
              <th scope="col">votar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.projetos.map((projeto, index) =>{
              return(
              <tr key={projeto.id}>
                <th scope="row">{index}</th>
                <td>{projeto.nome}</td>
                <td>{projeto.local}</td>
                <td>{projeto.area}</td>
                <td>{projeto.nivel}</td>
                <td><button type="button" className="btn btn-outline-success btn-rounded waves-effect" onclick={console.log(projeto.nome)}>escolher</button></td>
              </tr>);
            })}
          </tbody>
        </table>

      </div>
    );
  }
};
