import React, { Component } from 'react';
import FormularioProjeto from './../ui/FormularioProjeto';
import CardList from './../ui/CardList';
import CGeral from './../ui/CGeral';
import Status from './../ui/Status';
import data from './../data/database'

export default class Manage extends Component {
  constructor(){
    super();
    this.handleSub = this.handleSub.bind(this);
  }
  handleSub(e, {name, area, nivel, local}){
    e.preventDefault();
    data.writeProjeto(name, area, nivel, local);
  }
  render() {
    return (
      <div className="Container text-center">
        <h1> System Management </h1>
        <div className="row">
          <div className="col">
            <FormularioProjeto submitHandler={this.handleSub}/>
          </div>
          <div className="col">
            <CardList projetos = {this.props.projetos } />
          </div>
          <div className="col">
            <CGeral />
          </div>
          <div className="col">
            <Status />
          </div>
        </div>

      </div>
    );
  }
};
