var medidaModel = require("../models/medidaModel");

function buscarUltimosRankings(req, res) {

    const limite_linhas = 5;

    var idMinijogo = req.params.idMinijogo;

    console.log(`Recuperando os ultimos ${limite_linhas} rankings`);

    medidaModel.buscarUltimosRankings(idMinijogo, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos rankings.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarRankingsEmTempoReal(req, res) {

    var idMinijogo = req.params.idMinijogo;

    console.log(`Recuperando rankings em tempo real`);

    medidaModel.buscarRankingsEmTempoReal(idMinijogo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos rankings.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosRankings,
    buscarRankingsEmTempoReal

}