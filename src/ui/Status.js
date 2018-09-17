import React, { Component } from 'react';
import fire from "./../data/firebase"

export default class Status extends Component {
  constructor(){
    super();
    var bd = "OFF";
    if(fire != null){
      bd = "ON"
    }
    console.log(this.bd);
  }

  render(){
  return (
      <div className="container text-center border border-light p-5">
        <p className="h4 mb-4">Status</p>
        <div>
          <label> Server ON </label>
        </div>
        <div>
          <label> Banco de Dados {this.bd} </label>
        </div>
        <div>
          <label> LAN  </label>
        </div>
        <div>
          <label> NET OFF </label>
        </div>
        <div>
          <label> Sincronização ... </label>
        </div>
      </div>
    );}
}
