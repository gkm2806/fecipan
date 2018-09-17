import React from 'react';

const FormularioProjeto = ({submitHandler}) => {
  let _PNome, _PNivel, _PArea, _PLocal;
  const handleSub = (e) => {
    console.log("Projeto Criado");
    submitHandler(e, {
      name: _PNome.value,
      nivel: _PNivel.value,
      area: _PArea.value,
      local: _PLocal.value}
    );
  }
  return (
    <form onSubmit={handleSub} className="text-center border border-light p-5">
        <p className="h4 mb-4">Cadastro de Projetos</p>
        <input type="text" ref={input => _PNome = input} id="defaultContactFormName" className="form-control mb-4" placeholder="Nome do Projeto"/>

        <input type="text" ref={input => _PLocal = input} id="defaultContactFormName" className="form-control mb-4" placeholder="Local"/>

        <label>Nivel</label>
        <select ref={input => _PNivel = input} className="browser-default custom-select mb-4">
            <option value="" defaultValue disabled>Escolha</option>
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

        <button className="btn btn-info btn-block" type="submit">enviar</button>
    </form>
  );
};

export default FormularioProjeto;
