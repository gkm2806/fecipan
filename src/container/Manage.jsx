import React, { Component } from 'react';
import FormularioProjeto from './../ui/FormularioProjeto.jsx';
import Votacao from './Votacao.jsx';

export default class Manage extends Component {
  constructor(){
    super();
    this.handleSub = this.handleSub.bind(this)
  }
  handleSub(e, {nome, nivel, area}){
    e.preventDefault();
    var state = this.state
    console.log(nivel);
    console.log(area);
    console.log(Votacao.state);
  }
  render() {
    return (
      <div className="Container text-center">
        <h1> System Management </h1>
        <div class="row">
          <div class="col">
            <FormularioProjeto submitHandler={this.handleSub}/>
          </div>
          <div class="col">
          </div>
          <div class="col">
          </div>
          <div class="col">
          </div>
        </div>

      </div>
    );
  }
};
