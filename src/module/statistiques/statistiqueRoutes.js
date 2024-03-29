var express = require('express');
const StatistiqueController = require('./StatistiqueController');
var router = express.Router();

const statistiqueController = new StatistiqueController();

router.get('/statistique.temps', statistiqueController.tempsMoyenTravail);
router.get('/statistique.reservation', statistiqueController.reservationParJourMois);
router.get('/statistique.reservationMois', statistiqueController.reservationParMois);
router.get('/statistique.chiffreAffaire', statistiqueController.chiffreAffaire);
router.get('/statistique.chiffreAffaireMois', statistiqueController.chiffreAffaireParMois);
router.get('/statistique.benefice', statistiqueController.benefice);


module.exports = router;