'use strict';

let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    tipo1: { type: Number, required: true },
    tipo2: { type: String, required: true },
    foto: { type : String,required: true }
});
module.exports = mongoose.model('pokemon', pokemonSchema);