var express = require("express");
var router = express.Router();

var profileController = require("../controllers/quizController");

router.get("/ultimas/tentativas/:nomeUsuario", function (req, res) {
    profileController.buscarTresUltimasTentativas(req, res);
});

module.exports = router;