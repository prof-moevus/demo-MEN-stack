const mongoose = require('mongoose');


const FruitSchema = mongoose.Schema(
    {
        nom: { type: String, required: true },
        poids: { type: Number, required: true },
        couleur: String,
        saveur: String
    }
)

module.exports = mongoose.model("fruits", FruitSchema)