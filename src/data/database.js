import fire from './firebase.js'
const database = fire.database();
var modules = {};
modules.writeProjeto = (nome, area, nivel, local) => {
  database.ref('projetos/' + nome).set({
    nome: nome,
    local: local,
    area: area,
    nivel: nivel,
    pontos: 0
  });
}

modules.update = (name) => {
  var key = database.ref().child('projetos').orderByChild('nome').equalTo(name);
  var points = database.ref().child(key+'/pontos');

  var updates = {};

  updates['/projetos/' + key +'/pontos'] = points++;

  return database.ref().update(updates);
}

export default modules;
