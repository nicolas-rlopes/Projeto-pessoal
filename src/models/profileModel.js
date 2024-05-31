var database = require("../database/config");

function buscarRankingPessoal(idMinijogo, limite_linhas, nomeUsuario) {

    var instrucaoSql = `SELECT pontuacao, MINIJOGO.ID, nome FROM minijogo JOIN usuario ON fkUsuario = usuario.id
    WHERE nome = '${nomeUsuario}' ORDER BY pontuacao DESC LIMIT ${limite_linhas} ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarRankingPessoal
}
