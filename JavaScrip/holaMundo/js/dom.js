'use strict'

// DOM
function cambiaColor(){
	caja.style.background = color;
}

// 	Conseguir elementos con un ID concreto
//var  caja             =document.getElementById("micaja");
var caja              =document.querySelector("#micaja");
caja.innerHTML        ="TEXTO EN LA CAJA DESDE JS";
caja.style.background ="red";
caja.style.padding    ="20px";
caja.style.color      ="white";
caja.className        ="hola hola2";

//Conseguir elemetnos por su etiqueta

var todosLosDivs                = document.getElementsByTagName('div');
var contenidoTexto              =todosLosDivs[2];
contenidoTexto.innerHTML        ="Otro tecto para el segundo elemento";
contenidoTexto.style.background ="red";


for( var valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent =='string') {
		var parrafo = document.createElement("p");
		var texto   = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.appendChild(texto);
		document.querySelector("#miseccion").appendChild(parrafo);
	}
}

//conseguir elemento por su classname
var divsRojos= document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background="yellow";
for(var indice_div in divsRojos){
	if (divsRojos[indice_div].className=="rojo") {
		divsRojos[indice_div].style.background="red";
	}
}
console.log(divsRojos);

// Query selector solo selecciona un elemento
var id=document.querySelector("#encabezado");
console.log(id);
var claseRojo= document.querySelector("div.rojo");
console.log(claseRojo);
