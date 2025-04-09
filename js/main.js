let btnGuardar = document.getElementById("btnGuardar");

//Funcion del boton guardar para recibir lo que se escriba en el input.
btnGuardar.addEventListener("click", function(){
    let inputNombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", inputNombre);
});

// En la pagina welcome, mostrar nombre (si lo hay) o pedir que introduzca uno en la pagina anterior





// if(localStorage.getItem("email")!=null){
//     let email = localStorage.getItem("email");
//     input1.innerText = `Bienvenido de nuevo ${email}`;
//     //Esto elimina el valor del email guardado
//     localStorage.removeItem("email");
    
//     //Esto limpia todos los conjuntos de clave-valor
//     localStorage.clear();
// }else{
// //guarda el correo electronico
//     localStorage.setItem("email","jperez@hotmail.com");
// }//!=null