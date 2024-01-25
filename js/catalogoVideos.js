var listaVideos = [
    { titulo: 'video 1', descripcion: 'descripcion video 1', URL: '../multimedia/react.mp4' },
    { titulo: 'video 2', descripcion: 'descripcion video 2', URL: 'https://www.youtube.com/watch?v=wGxDfSWC4Ww' },
    { titulo: 'video 3', descripcion: 'descripcion video 3', URL: 'https://www.youtube.com/watch?v=wGxDfSWC4Ww' }

];

var catalogoVideos = document.getElementById("cat");

function mostrarCatalogoVideos(videosMostrados) {
    catalogoVideos.innerHTML = '';

    videosMostrados.forEach(function (indexVideo) {

        var filVideo = document.createElement('div');

        var col1Video = document.createElement('div');
        var urlVideo = document.createElement('video');

        filVideo.setAttribute('class', 'row mt-5');
        col1Video.setAttribute('class', 'col');


        urlVideo.setAttribute('src', indexVideo.url);
        urlVideo.setAttribute('width', '400px');
        urlVideo.setAttribute('controls', '');

        col1Video.appendChild(urlVideo);
        filVideo.appendChild(col1Video);


        var col2Titulo = document.createElement('div');
        var h4Titulo = document.createElement('h4');
        var h6Descripcion = document.createElement('h6');
        col2Titulo.setAttribute('class', 'col');

        h4Titulo.textContent = indexVideo.titulo;
        h6Descripcion.textContent = indexVideo.descripcion;

        col2Titulo.appendChild(h4Titulo);
        col2Titulo.appendChild(h6Descripcion);
        filVideo.appendChild(col2Titulo);

        var col3Icono = document.createElement("div");
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "25");
        svg.setAttribute("height", "25");
        svg.setAttribute("style", "fill:currentColor");
        svg.innerHTML =
            '<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>';

        col3Icono.setAttribute("class", "col");
        col3Icono.appendChild(svg);
        filVideo.appendChild(col3Icono);



        catalogoVideos.appendChild(filVideo);

    });
}




function buscarVideo() {
    var contenidoBuscar = document.getElementById('buscar').value;
    // alert (contenidoBuscar);
    var videosBuscados = listaVideos.filter(
        function (indexVideo) {
            // includes va a comparar si tenemos lo mismo en la caja de texto 
            //tolocalelowercase convierte mausculas a minusculas 
            return indexVideo.titulo.toLocaleLowerCase().includes(contenidoBuscar);
        }
    );

    mostrarCatalogoVideos(videosBuscados);

}

mostrarCatalogoVideos(listaVideos);