const express = require('express');
const router = express.Router();

const Fruit = require("../models/Fruits.js")


// Définition des routes
router.post('/', function (req, res) {
    if (Object.keys(req.body).length === 0) { // Tester si la requete a un body
        res.end()
    }
    const data = new Fruit(req.body)
    data.save()
    res.send(JSON.stringify(data))
});


router.get('/', (req, res) => {
    Fruit.find().then(data => {
    console.log("DB 77: ", data)
    res.send(JSON.stringify(data))
})
});

// router.get('/:key/:value', async (req, res) => {
//     const key = String(req.params.key)
//     console.log(key, req.params.value)
//     const data = await Fruit.findOne({key : "pomme"}) // pourquoi ça marche pas??
//     res.send(data)
// });

router.get('/poids/:value', async (req, res) => {
    const data = await Fruit.findOne({poids : Number(req.params.value)})
    res.send(data)
});

// Exportation du routeur
module.exports = router;