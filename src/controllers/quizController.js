var profileModel = require("../models/quizModel");

function buscarTresUltimasTentativas(req, res) {

    var nomeUsuario = req.params.nomeUsuario;

    console.log(`Recuperando os ultimos 3 tentativas do usuario ${nomeUsuario}`);

    profileModel.buscarTresUltimasTentativas(nomeUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas 3 tentativas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarTresUltimasTentativas
}