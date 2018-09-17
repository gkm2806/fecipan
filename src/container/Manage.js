import React, { Component } from 'react';
import FormularioProjeto from './../ui/FormularioProjeto';
import CardList from './../ui/CardList';
import CGeral from './../ui/CGeral';
import Status from './../ui/Status';

export default class Manage extends Component {
  constructor(){
    super();
    this.handleSub = this.handleSub.bind(this);
  }
  handleSub(e, submits){
    e.preventDefault();
    console.log(submits);
    this.props.projetos.push(submits);
    console.log(this.props.projetos)
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
            <CardList projetos = {this.props.projetos} />
          </div>
          <div className="col">
            <CGeral />
          </div>
          <div className="col">
            <Status lan="on" net="on" db="fail" />
          </div>
        </div>

      </div>
    );
  }
};
