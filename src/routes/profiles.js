var express = require("express");
var router = express.Router();

var profileController = require("../controllers/profileController");

router.get("/ultimas/:idMinijogo/:nomeUsuario", function (req, res) {
    profileController.buscarRankingPessoal(req, res);
});

module.exports = router;