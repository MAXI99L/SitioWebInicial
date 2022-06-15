function preguntarNombreYApellido(){
var nombre=prompt("Ingresa tu nombre");
var apellido=prompt("Ingresar apellido");
alert("Hola "+nombre+" "+apellido);
alert(`Hola tu nombre es ${nombre} y tu apellido es ${apellido}`)
}
function ponerEnMayusculas(){
    var datosPersonales=document.getElementById("datos");
    datosPersonales.innerHTML="DATOSPERSONALES";
    datosPersonales.style.background="white";
}
function modooscuro(){
    var modooscuro.style.background="black";
}