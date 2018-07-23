'use strict'
// moveUser(true);
let eString = /[A-Za-záéíóúñÑÁÉÍÓÚ]+/,
    eNumber = /[0-9]+/,
    eSpace = /\s+/,
    eEmail = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/,
    eDate = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/,
    ePhone = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
let map, marker, gCoder;
/**
 * funcion que retorna un elemento html del documento
 * @param {String} id es la isntruccion para identificar el elemento que se desea extraer
 *  
 */
function elm(id) {
    return document.querySelector(id);
}
function createElm(tag) {
    return document.createElement(tag);
}
/**
 * agrega un evento a un elemento 
 * @param {*} element elemeto html que se le va a asignar un evento
 * @param {String} event el tipo de evento al que va a responder
 * @param {function} action la funcion que se va a ejecutar al detectar el evento
 */
function listener(element, event, action) {
    element.addEventListener(event, action);
}
/**
 * comprueba si un elemento html esta vacío
 * @param {*} element elemento html
 */
function blanck(element) {
    let valido = true;
    if (element != null) {
        if (element.value == '') {
            valido = false;
        }
    } else {
        valido = false;
    }
    return valido;
}
/**
 * comprueba si el value de un elemento cumple con la condición
 * @param {*} expresion expresion regular
 * @param {*} element elemento
 */
function test(expresion, element) {
    return expresion.test(element.value)
}
function addClass(element, clase) {
    element.classList.add(clase);
}
function removeClass(element, clase) {
    element.classList.remove(clase);
}
// function peticion(informacion) {
//     console.log(informacion);
//     let respuesta = '';
//     let peticion = $.ajax({
//         url: 'http://localhost:4000/api/registro_cliente',
//         type: 'post',
//         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
//         dataType: 'json',
//         async: false,
//         data: {
//             informacion
//         }
//     });

//     peticion.done(function (response) {
//         respuesta = response;
//     });

//     peticion.fail(function (response) {

//     });

//     return respuesta;
// }
function validador(elements) {
    let valido=true;
    for (let i = 0; i < elements.length; i++) {
        let element=elements[i]
        switch (element.name) {
            case 'edad':
                if (test(eString,element)||test(eSpace,element)||!blanck(element)) {
                    addClass(element,'fail')
                    valido=false;
                }
                break;
            case 'id':
            if (test(eString,element)||test(eSpace,element)||!blanck(element)) {
                addClass(element,'fail')
                valido=false;
            }
                break;
            case 'nombre':
            if (test(eNumber,element)||test(eSpace,element)||!blanck(element)) {
                addClass(element,'fail');
                valido=false;
            }
                break;
            case 'tipo1':
            if (element.value=='') {
                addClass(element,'fail')
                valido=false;
            }
                break;
            case 'tipo2':
                break;
            case 'img':
            if (element.src=='img/photo.svg') {
                addClass(element,'fail')
                valido=false;
            }
                break;
            default:
                break;
        }
    }
}