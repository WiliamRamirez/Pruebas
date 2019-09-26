/* global localStorage*/
/* global document*/
/* global alert*/
/* global fetch*/
/* jshint node: true */
/*jshint esversion: 6 */

'use strict';
var div_usuarios= document.querySelector("#usuarios");
var div_janet= document.querySelector("#janet");


getUsuarios()
.then(data => data.json())
.then(users =>{
	listadoUsuarios(users.data);
	return getJanet();
})
.then(data => data.json())
.then(user =>{
	mostrarJanet(user.data);
});

function getUsuarios () {
	return fetch('https://reqres.in/api/users');
}

function getJanet () {
	return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios (usuarios) {
	usuarios.map(function(user, indice_user) {
		let nombre = document.createElement('h3');
		nombre.innerHTML= indice_user+" "+user.first_name+" "+ user.last_name;
		div_usuarios.appendChild(nombre);
		document.querySelector(".loading").style.display = 'none';
	});
}

function mostrarJanet (user) {
	
	let nombre = document.createElement('h4');
	let avatar= document.createElement('img');
	nombre.innerHTML="Usuario encontrado: <br>"+ user.first_name+" "+ user.last_name
	+"<h2>Foto de Usuario!</h2>"+"<hr>";

	avatar.src = user.avatar;
	avatar.width = '100';
	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);
	document.querySelector("#janet .loading").style.display = 'none';

}

