var profileModel = require("../models/profileModel");

function buscarRankingPessoal(req, res) {

    const limite_linhas = 5;

    const idMinijogo = req.params.idMinijogo;
    var nomeUsuario = req.params.nomeUsuario;

    console.log(`Recuperando os ultimos ${limite_linhas} rankings do usuario ${nomeUsuario}`);

    profileModel.buscarRankingPessoal(idMinijogo, limite_linhas, nomeUsuario).then(function (resultado) {
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
    buscarRankingPessoal
}