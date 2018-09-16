import React, { component } from 'react';

const Card = (props) => {
  return (
    <div className="card elegant-color white-text " style={{width: 18+"rem"}}>
      <img className="card-img-top" src={props.photo} alt="Card image cap" />
      <div className="card-body ">
        <p className="card-text white-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
