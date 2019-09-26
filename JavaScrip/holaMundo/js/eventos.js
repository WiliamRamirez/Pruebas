'use strict'

//Eventos del raton
//
window.addEventListener('load',()=>{ //se cargar primero las funciones html o css
	var boton=document.querySelector("#boton");

	function cambiarColor(){
		var bg=boton.style.background ;
		if (bg=="green") {
			boton.style.background="red";
		}else{
			boton.style.background="green";
		}
		boton.style.padding= "10px";
		boton.style.border="1px solid #ccc";

		return true;

	}

	//click
	boton.addEventListener('click',function(){
		cambiarColor();
	});
	//Mouse over

	boton.addEventListener('mouseover',function(){
		boton.style.background="yellow";
	});

	boton.addEventListener('mouseout',function(){
		boton.style.background="#ccc";
	});

	//Focus

	var input = document.querySelector("#campo_nombre");

	input.addEventListener('focus',function(){
		console.log("estas dentro del input");
	});

	input.addEventListener('blur',function(){
		console.log("estas fuera del input");
	});

	//keydown
	input.addEventListener('keydown',function(event){
		console.log("Pulsando esta tecla",String.fromCharCode(event.keyCode));
	});

	//keypress
	input.addEventListener('keypress',function(event){
		console.log("Tecla Presionada",String.fromCharCode(event.keyCode));
	});

	//keyup
	input.addEventListener('keyup',function(event){
		console.log("Tecla soltada",String.fromCharCode(event.keyCode));
	});
});
