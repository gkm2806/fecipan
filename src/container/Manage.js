import React, { Component } from 'react';
import FormularioProjeto from './../ui/FormularioProjeto';
import Votacao from './Votacao';
import CardList from './../ui/CardList';
import CGeral from './../ui/CGeral';
import Status from './../ui/Status';

export default class Manage extends Component {
  constructor(){
    super();
    this.handleSub = this.handleSub.bind(this);
  }
  handleSub(e, {nome, nivel, area}){
    e.preventDefault();
    var state = this.state;
    console.log(nivel);
    console.log(area);
    console.log(Votacao.state);
  }
  componentDidMount(){
    console.log("manage!")
    console.log(this.props.projetos);
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
            <CardList projetos = {this.props.projetos} />
          </div>
          <div class="col">
            <CGeral />
          </div>
          <div class="col">
            <Status lan="fail" db="fail" />
          </div>
        </div>

      </div>
    );
  }
};
