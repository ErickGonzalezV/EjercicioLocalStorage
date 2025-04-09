let btnGuardar = document.getElementById("btnGuardar");

//Funcion del boton guardar para recibir lo que se escriba en el input.
btnGuardar.addEventListener("click", function(){
    let inputNombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", inputNombre);
});
