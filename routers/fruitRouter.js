const express = require('express');
const router = express.Router();

// Définition des routes
router.post('/', function(req, res) {
  res.send('Vous avez fait une requête POST sur /chemin');
});

router.get('/:id', function(req, res) {
  res.send('Vous avez fait une requête Get sur ' + req.params.id);
});

// Exportation du routeur
module.exports = router;