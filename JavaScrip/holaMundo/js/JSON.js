'use strict'

var pelicula ={
	titulo: 'Batman vs Superman',	
	year: 2017,
	pais: 'Estados unidos',
};

var peliculas=[
{titulo:"La verdad duele", year:2016, pais:"Francia"},
pelicula
];
var caja_peliculas= document.querySelector("#peliculas");
var indice_peliculas;
for(indice_peliculas in peliculas){
	var parrafo = document.createElement("p");
	parrafo.append(peliculas[indice_peliculas].titulo+" - "+ peliculas[indice_peliculas].year);
	caja_peliculas.append(parrafo);
}