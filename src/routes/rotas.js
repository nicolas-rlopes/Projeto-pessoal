var express = require("express");
var router = express.Router();

var rotaController = require("../controllers/rotaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    rotaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    rotaController.buscarPorDescricao(req, res);
});

router.get("/buscar/:id", function (req, res) {
  rotaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  rotaController.listar(req, res);
});

module.exports = router;