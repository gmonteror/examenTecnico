'use strict';

const trainerModel = require('./entrenador.model');

module.exports.registrar = function (req, res) {

    let nuevoEntrenador = new trainerModel({
        id: req.body.id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        genero: req.body.genero,
        foto: req.body.foto
    });

    nuevoEntrenador.save(function (error) {
        if (error) {
            res.json({
                succes: false,
                msj: 'El Entrenador no pudo ser registrado, ocurrió el siguiente error' + error
            });
        } else {
            res.json({
                succes: true,
                msj: 'El Entrenador fue registrado con éxito'
            });
        }
    });
};

module.exports.listar = function (req, res) {
    trainerModel.find().then(
        function (trainers) {
            res.send(trainers);
        });
};
module.exports.capturar_pokemon = function (req, res) {

    trainerModel.update({
        _id: req.body._id
    }, {
            $push: {
                'equipo': {
                    id: req.body.id
                }
            }
        },
        function (error) {
            if (error) {
                res.json({
                    success: false,
                    msg: 'No se pudo Signar el pokémon, ocurrió el siguiente error' + error
                });
            } else {
                res.json({
                    success: true,
                    msg: 'El pokémon se asignó con éxito'
                });
            }
        }
    )
};

module.exports.buscarIdEntrenador = function (req, res) {
    trainerModel.find({
        'id': req.query.id
    }).then(
        function (trainers) {
            res.send(trainers);
        });
};
module.exports.buscarNombreEntrenador = function (req, res) {
    trainerModel.find({
        'nombre': req.query.nombre
    }).then(
        function (trainers) {
            res.send(trainers);
        });
};