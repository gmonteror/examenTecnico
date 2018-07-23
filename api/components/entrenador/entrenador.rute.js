'use strict';

const express = require('express');
const router = express.Router();
const trainer = require('./entrenador.api');

router.route('/registro_entrenador')
.post(function(req,res){
    trainer.registrar(req,res);
});
router.route('/entrenadores')
.get(function(req,res){
    trainer.registrar(req,res);
});
router.route('/capturar')
.post(function(req,res){
    trainer.capturar_pokemon(req,res);
});
router.route('/entrenador_id')
.get(function(req,res){
    trainer.buscarIdEntrenador(req,res);
});
router.route('/entrenador_nombre')
.get(function(req,res){
    trainer.buscarNombreEntrenador(req,res);
});