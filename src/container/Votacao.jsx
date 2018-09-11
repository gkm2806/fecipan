import React, { Component } from 'react';
import Card from './../ui/Card.jsx';

export default class Votacao extends Component {
  constructor(){
    super();
    this.state = {
      projetos: [
        {
          id: 1,
          nome: 'Estudo sobre macacos espaciais jogadores de lolzinho',
          pontos: 0,
          area: "Exatas",
          local: "A8"
        },
        {
          id: 2,
          nome: 'Coisas chatas de humanas',
          pontos: 0,
          area: "Humanas",
          local: "?"
        },
        {
          id: 3,
          nome: 'Ensaio Metalurgico sobre como fazer portões',
          pontos: 0,
          area: "Sla",
          local: "M1"
        }
      ]
    }
  }
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
              <th scope="col">votar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projetos.map((projeto, index) =>{
              return(
              <tr key={projeto.id}>
                <th scope="row">{projeto.id}</th>
                <td>{projeto.nome}</td>
                <td>{projeto.local}</td>
                <td>{projeto.area}</td>
                <td><button type="button" className="btn btn-outline-success btn-rounded waves-effect">escolher</button></td>
              </tr>);
            })}

          </tbody>
        </table>

      </div>
    );
  }
};
