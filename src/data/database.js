import fire from './firebase.js'
const database = fire.database();

function writeProjeto(nome, area, nivel, local) {
  database.ref('projetos/' + nome).set({
    nome: nome,
    local: local,
    area: area,
    nivel: nivel
  });
}

export default writeProjeto;
