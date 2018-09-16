import React, { component } from 'react';

const Status = (props) => {
  return (
      <div className="container text-center border border-light p-5">
        <p className="h4 mb-4">Status</p>
        <div>
          <label> Server {props.server} </label>
        </div>
        <div>
          <label> Banco de Dados {props.db} </label>
        </div>
        <div>
          <label> LAN  {props.lan} </label>
        </div>
        <div>
          <label> NET {props.net} </label>
        </div>
        <div>
          <label> Sincronização ... </label>
        </div>
      </div>
    );
  };

export default Status;
