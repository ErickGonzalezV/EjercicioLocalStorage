let encabezado1 = document.getElementById("encabezado1");
let nombre = localStorage.getItem("nombre");


function agrega(){
    if(nombre!= null){
    encabezado1.innerHTML += `<h1>Hola ${nombre}, bienvenido/a de nuevo</h1>`;
}else{
    encabezado1.innerHTML += `Por favor ve al index e ingresa tu nombre`;
}}

// Se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina")
    agrega();
}); //load

//Boton Borrar

btnBorrar.addEventListener("click", function(){
    localStorage.removeItem("nombre");
});
