/* global localStorage*/
/* global document*/
/* jshint node: true */
'use strict';

var formulario= document.querySelector("#formPeliculas");

formulario.addEventListener('submit',function () {
	console.log("entra");
	var titulo= document.querySelector('#addpelicula').value;
	if (titulo.length >= 1) {
		localStorage.setItem(titulo, titulo);
	}
	
});

var etiqueta_ul= document.querySelector("#peliculas-list");
for (var indiceLocalStorage in localStorage) {
	console.log(localStorage[indiceLocalStorage]);
	if (typeof localStorage[indiceLocalStorage] == 'string') {
		var etiqueta_li= document.createElement("li");
		etiqueta_li.append(localStorage[indiceLocalStorage]);
		etiqueta_ul.append(etiqueta_li);
	}


}

var formularioBorrar= document.querySelector("#formBorrarPeliculas");

formularioBorrar.addEventListener('submit',function () {
	console.log("entra");
	var titulo= document.querySelector('#borrarPelicula').value;
	if (titulo.length >= 1) {
		localStorage.removeItem(titulo);
	}
	
});