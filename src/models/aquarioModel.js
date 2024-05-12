var database = require("../database/config");

function buscarAquariosPorRota(rotaId) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE fk_rota = ${rotaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(rotaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_rota) aquario VALUES (${descricao}, ${rotaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorRota,
  cadastrar
}
