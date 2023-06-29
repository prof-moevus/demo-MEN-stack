const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
require('dotenv').config(); // Afin de charger le ficheir .env

const app = express();

app.use(cors());

// Connection à MongoDB
mongoose.connect(process.env.ATLASDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => {
    console.log("Erreur de connexion à MongoDB : " + error);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bonjour monde !');
});

const port = process.env.SERVER_PORT || 4200
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});