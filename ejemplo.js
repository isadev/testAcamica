"use strict";

var existe = false; 
var miAmigo = "Marianna";

function iniciarPrograma() {
    var amigo = prompt("ingrese el nombre de su amigo");    
    var permitido = puedoVerPelicula(amigo, miAmigo);
    
    if (!permitido) {
        alert("no puedes ver este tipo de peliculas")
    } else {
        var peliculaIngresada = prompt("ingresa una pelicula que quieras ver");
        existe = existePelicula(peliculaIngresada);        
    }

    if (!existe)
        alert("la pelicula no existe, inicia la app nuevamente");
    else 
        alert("hey!, la estan pasando ahora mismo en hbo");
}

function puedoVerPelicula(amigo, invitado) {
    if (amigo === invitado) {
        return preguntarEdad(); 
    }
    return false;
}

var preguntarEdad = function() {
    var edad = parseInt(prompt("cual es tu edad?"));
    if (edad >= 18) {
        return true;
    } 
    return false;
}

// buscar si la pelicula ingresada existe en las que existen en la app
function existePelicula(nombrePelicula) {
    var encontrado = false;
    switch (nombrePelicula) {
        case "que paso ayer 1":
        case "detective conan":
                encontrado = true;
            break;
        
        default:
            break;
    }
    return encontrado;
    // aca estuve yo (isa)
}
    
