'use strict';

let mongoose = require('mongoose');

let trainerSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    genero: { type: String, required: true },
    equipo: [
        {
            id: { type: String }
        }
    ],
    foto : {type : String,required: true}
});
module.exports = mongoose.model('trainer', trainerSchema);