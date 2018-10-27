const mongoose = require('mongoose');

let pokeSchema = new mongoose.Schema({
    name: String,
    url: String,
    count: Number
});


let Pokemon = mongoose.model("Pokemon", pokeSchema)

module.exports = Pokemon;

