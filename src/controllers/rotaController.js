var rotaModel = require("../models/rotaModel");

function buscarPordescricao(req, res) {
  var descricao = req.query.descricao;

  rotaModel.buscarPordescricao(descricao).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  rotaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  rotaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var funcao = req.body.funcao;

  rotaModel.buscarPordescricao(descricao).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a rota com o descricao ${descricao} já existe` });
    } else {
      rotaModel.cadastrar(funcao, descricao).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPordescricao,
  buscarPorId,
  cadastrar,
  listar,
};
