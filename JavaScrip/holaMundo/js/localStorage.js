/* global localStorage*/
/* global document*/
/* jshint node: true */
'use strict';


if (typeof(Storage) !== 'undefined') {
	console.log("Localstorage disponible");
}else {
	console.log("Localstorage no disponible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

//Guardar objetos

var usuario={
	nombre: "Victor Robles",
	email: "victor@victor.com",
	web: "victorblesweb.es"	
};

localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto

console.log(localStorage.getItem("usuario"));

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#peliculas").append(" "+userjs.web+" - "+ userjs.nombre);

localStorage.removeItem("usuario");

