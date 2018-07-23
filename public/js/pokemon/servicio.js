
let imagenUrl = '';


$(function () {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'dnfppz5h5', api_key: '435475441938888' });

    // Upload button
    let uploadButton = $('#upload');

    // Upload button event
    uploadButton.on('click', function (e) {
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'dnfppz5h5', upload_preset: 'upload', tags: ['cgal'] },
            function (error, result) {
                if (error) console.log(error);
                // If NO error, log image data to console
                let id = result[0].public_id;
                console.log(id);
                // imagenUrl = 'https://res.cloudinary.com/koffeedev/image/upload/' + id;
                imagenUrl = processImage(id);
                console.log(imagenUrl);
                elm('#preview').src = imagenUrl;
                // cambiarFoto(imagenUrl);
                return imagenUrl;
            });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return $.cloudinary.url(id, options);
}
function nuevoPokemon(req) {
    console.log(req);
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registro_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            id: req.body.id,
            nombre: req.body.nombre,
            tipo1: req.body.tipo1,
            tipo2: req.body.tipo2,
            foto: req.body.foto
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}