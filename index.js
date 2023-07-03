const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
require('dotenv').config(); // Afin de charger le ficheir .env

const routerV1 = require("./routers/apiV1Router")
const routerAuth = require("./routers/authRouter")


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connection à MongoDB
mongoose.connect(process.env.ATLASDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => {
    console.log("Erreur de connexion à MongoDB : " + error);
  });


app.get('/', (req, res) => {
  res.redirect("/public/index.html")
});

app.use("/api/v1", routerV1)

const port = process.env.SERVER_PORT || 4200
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});