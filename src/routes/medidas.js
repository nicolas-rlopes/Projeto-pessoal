var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idMinijogo", function (req, res) {
    medidaController.buscarUltimosRankings(req, res);
});



module.exports = router;