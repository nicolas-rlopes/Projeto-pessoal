var database = require("../database/config");

function buscarUltimosRankings(idMinijogo, limite_linhas) {

    var instrucaoSql = `SELECT minigame.pontuacaoMaxima,
    minigame.fkUsuario,
    usuario.nome FROM 
        (SELECT MAX(pontuacao) AS pontuacaoMaxima,
        fkUsuario from minijogo
        GROUP BY fkUsuario) AS minigame
            JOIN usuario ON minigame.fkUsuario = usuario.id
            ORDER BY minigame.pontuacaoMaxima 
            DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarRankingsEmTempoReal(fkUsuario) {

//     var instrucaoSql = `SELECT pontuacao, fkUsuario FROM minijogo WHERE id = ${fkUsuario} ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimosRankings,
    // buscarRankingsEmTempoReal,
    
}
