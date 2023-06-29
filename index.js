const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
require('dotenv').config(); // Afin de charger le ficheir .env

const Fruit = require("./models/Fruits.js")
const routerV1 = require("./routers/apiV1Router.js")

const app = express();
app.use(cors());
app.use(express.json());

// Connection à MongoDB
mongoose.connect(process.env.ATLASDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => {
    console.log("Erreur de connexion à MongoDB : " + error);
  });


app.get('/', (req, res) => {
  res.send('Bonjour monde !');
});

app.use("/api/v1", routerV1)

// app.post("/api/v1/fruit", (req, res) => {

//   //console.log("DB : ", req.body)
//   // let data
//   // if (Object.keys(req.body).length > 0) { // Tester si la requete a un body
//   //    data = new Fruit(req.body)
//   // } else {
//   //  data = new Fruit(
//   //   {
//   //     nom: "lichi",
//   //     poids: 100,
//   //     couleur: "#a3a3a3",
//   //     saveur: "sucrée"
//   // })
//   // }
//   const data = new Fruit(req.body)
//   data.save()
//   res.send("success")
// })

const port = process.env.SERVER_PORT || 4200
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});