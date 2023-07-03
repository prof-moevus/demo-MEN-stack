const express = require('express');
const routerFruit = require("./fruitRouter")
const routerUser = require("./userRouter")


const router = express.Router();
// Définition des routes
router.use('/fruit', routerFruit);

router.use('/auth', routerUser);



// Exportation du routeur
module.exports = router;