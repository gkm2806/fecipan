import React from 'react';
const Projetos = (props) => {
  return (
    <div className='p-1 m-2'style={{height:"5em",display:"flex",flexWrap:"wrap"}}>
      <div  style={{width: 70+"%",height: 100+"%",display:"flex",flexWrap:"wrap"}}>
        <div className='border border-light' style={{width: 100+"%",height: 50+"%"}}>
          {props.nome}
        </div>
        <div className='border border-light' style={{width: 33.33+"%",height: 50+"%"}}>
          {props.nivel}
        </div>
        <div className='border border-light' style={{width: 33.33+"%",height: 50+"%"}}>
          {props.local}
        </div>
        <div className='border border-light' style={{width: 33.33+"%",height: 50+"%"}}>
          {props.pontos}
        </div>
      </div>
      <div className='border border-light text-center' style={{width: 30+"%",height: 100+"%"}}>
         deletar
      </div>
    </div>
  );
};

export default Projetos;
