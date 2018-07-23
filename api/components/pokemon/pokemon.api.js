'use strict';
const pokemonModel = require('./pokemon.model');
module.exports.registrar = function (req, res) {

    let nuevoPokemon = new pokemonModel({
        id: req.body.id,
        nombre: req.body.nombre,
        tipo1: req.body.tipo1,
        tipo2: req.body.tipo2,
        foto: req.body.foto
    });

    nuevoPokemon.save(function (error) {
        if (error) {
            res.json({
                succes: false,
                msj: 'El pokémon no pudo ser registrado, ocurrió el siguiente error' + error
            });
        } else {
            res.json({
                succes: true,
                msj: 'El pokémon fue registrado con éxito'
            });
        }
    });
};
module.exports.listar = function (req, res) {
    pokemonModel.find().then(
        function (trainers) {
            res.send(trainers);
        }
    );
};
module.exports.buscarIdPokemon = function (req, res) {
    pokemonModel.find({
        'id': req.query.id
    }).then(
        function (pokemons) {
            res.send(pokemons);
        }
    );
};
module.exports.buscarNombrePokemon = function (req, res) {
    pokemonModel.find({
        'nombre': req.query.nombre
    }).then(
        function (pokemons) {
            res.send(pokemons);
        });
};