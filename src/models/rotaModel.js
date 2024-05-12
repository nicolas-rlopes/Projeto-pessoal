var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM rota WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM rota`;

  return database.executar(instrucaoSql);
}

function buscarPordescricao(descricao) {
  var instrucaoSql = `SELECT * FROM rota WHERE descricao = '${descricao}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(funcao, descricao) {
  var instrucaoSql = `INSERT INTO rota (funcao, descricao) VALUES ('${funcao}', '${descricao}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPordescricao, buscarPorId, cadastrar, listar };
