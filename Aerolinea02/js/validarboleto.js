function validar(){
    var correo, telefono, expresion; 
    telefono= document.getElementById("telefono").value;
     


    if(telefono ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }

	
    else if (telefono.length>10){
        alert("El telefono es demasiado largo");
        return false;
    }
    else if (isNaN(telefono)){
        alert("El telefono ingresado no es un numero");
        return false;
    }
}