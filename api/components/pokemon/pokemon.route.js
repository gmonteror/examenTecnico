'use strict';

const express = require('express');
const router = express.Router();
const pokemon = require('./pokemon.api');

router.route('/registro_pokemon')
.post(function(req,res){
    pokemon.registrar(req,res);
});
router.route('/pokemons')
.get(function(req,res){
    pokemon.registrar(req,res);
});
router.route('/pokemon_id')
.get(function(req,res){
    pokemon.buscarIdPokemon(req,res);
});
router.route('/pokemon_nombre')
.get(function(req,res){
    pokemon.buscarNombrePokemon(req,res);
});