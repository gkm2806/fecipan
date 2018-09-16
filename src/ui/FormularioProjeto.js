import React, { component } from 'react';

const FormularioProjeto = ({submitHandler}) => {
  let _PNome, _PNivel, _PArea;
  const handleSub = (e) => {
    console.log("Projeto Criado");
    console.log(_PNome.value);
    console.log(_PNivel.value);
    console.log(_PArea.value);
    submitHandler(e, {
      name: _PNome.value,
      nivel: _PNivel.value,
      area: _PArea.value});
  }
  return (
    <form onSubmit={handleSub} className="text-center border border-light p-5">
        <p className="h4 mb-4">Cadastro de Projetos</p>
        <input type="text" ref={input => _PNome = input} id="defaultContactFormName" className="form-control mb-4" placeholder="Nome do Projeto"/>

        <label>Nivel</label>
        <select ref={input => _PNivel = input} className="browser-default custom-select mb-4">
            <option value="" selected disabled>Escolha</option>
            <option value="E. Fundamenta">E. Fundamental</option>
            <option value="E. Médio">E. Médio</option>
            <option value="E. Tecnico">E. Tecnico</option>
        </select>

        <label>Area</label>
        <select ref={input => _PArea = input} className="browser-default custom-select mb-4">
            <option value="" selected disabled>Escolha</option>
            <option value="Humanas" >Humanas</option>
            <option value="Exatas">Exatas</option>
            <option value="Biológicas">Biológicas</option>
        </select>

        <div className="form-group">
            <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="descrição"></textarea>
        </div>

        <button className="btn btn-info btn-block" type="submit">enviar</button>
    </form>
  );
};

export default FormularioProjeto;
