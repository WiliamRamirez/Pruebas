'use strict'


var letras     =new Array("este","es","un","ejemplo");
var hola       =1;
var qchuchafue = "qchuchafue";

//letras.sort();
letras.reverse();

console.log(letras);
/*
busqueda fortEach

document.write("<h1>Mi nombre es</h1>");
document.write("<lu>");
elementos.forEach((elemento,index)=>{
	document.write("<li>"+" "+index+" - "+elemento+"</li>");
});
document.write("</lu>");
*/
document.write();

//busqueda for in
document.write("<h1>Mi nombre es</h1>");
document.write("<lu>");
for(let indice in letras){
	document.write("<li>"+letras[indice]+"</li>");
}
document.write("</lu>");

//busqueda de un array

var busqueda= letras.find(indice => indice == "es");
console.log(busqueda);

var busqueda= letras.findIndex(indice => indice == "es");
console.log(busqueda);


//mas ejemplos

var precios =[10, 20, 50, 80, 12];

var buscar_precios= precios.some(indice_precios => indice_precios >= 20); // metodo some buscar una condicion concreta

console.log(buscar_precios);
var indice = letras.indexOf("1");
if (indice> -1) {
	letras.splice(indice,1);
}


var letras_string = letras.join();
var cadena = "texto1,texto2,texto3";
var cadena_array=cadena.split(",");
//console.log(cadena_array);
var letras1="ac";

