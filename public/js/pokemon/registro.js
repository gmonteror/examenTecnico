'use strict';
let form = elm('form'),
    tipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
;
llenarSelect(tipos, form.tipo1)
llenarSelect(tipos, form.tipo2)
listener(form.tipo1, 'change', function () {
    llenarSelect(tipos, form.tipo2, form.tipo1);
    form.tipo1.classList='';
    form.tipo2.classList='';
    addClass(form.tipo1,form.tipo1.value.toLowerCase())
});
listener(form.tipo2, 'change', function () {
    form.tipo2.classList='';
    addClass(form.tipo2,form.tipo2.value.toLowerCase())
});
listener(elm('#registro'),'click',registro);

function llenarSelect(lista, element, dependencia) {
    let valor;
    if (!dependencia) {
        valor = '';
    } else {
        valor = dependencia.value;
    }
    element.options[0] = new Option('--Seleccione un tipo--','');
    for (let i = 0; i < lista.length; i++) {
        element.options[i + 1] = new Option(lista[i], lista[i].toLowerCase());
        if (lista[i].toLowerCase() == valor) {
            element.options[i + 1].disabled = 'disabled';
        }
        addClass(element.options[i + 1],lista[i].toLowerCase())
    }
}
function registro() {
    let datos=[
        form.id,
        form.nombre,
        form.tipo1,
        form.tipo2,
        form.img
    ];
    if (validador(datos)) {
        let req={
            id: form.id,
            nombre:form.nombre,
            tipo1:form.tipo1,
            tipo2:form.tipo2,
            foto:form.img
        }
        nuevoPokemon(req);
    }
}
