var database = require("../database/config");

function buscarTresUltimasTentativas(nomeUsuario) {

    var instrucaoSql = `SELECT tentativa, acertos, erros, usuario.nome FROM quiz JOIN usuario ON fkUsuario = usuario.id WHERE nome = '${nomeUsuario}' ORDER BY tentativa DESC LIMIT 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTresUltimasTentativas
}
