const express = require('express');
const router = express.Router();

const Fruit = require("../models/Fruits.js")
const FruitCtrl = require("../controllers/Fruits.js")



// Définition des routes
router.post('/', FruitCtrl.saveFruitInstance);
router.get('/', FruitCtrl.getFruitCollection);
router.get('/poids/:value', FruitCtrl.findFruitByPoids);

// Exportation du routeur
module.exports = router;