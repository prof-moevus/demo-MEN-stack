const express = require('express');
const routerFruit = require("./fruitRouter")

const router = express.Router();
// Définition des routes
router.use('/fruit', routerFruit);


// Exportation du routeur
module.exports = router;