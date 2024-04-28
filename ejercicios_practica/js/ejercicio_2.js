"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function promedio(numero1, numero2) {
    console.log("Funcion promedio")
    // En esta función debe determinar el promedio
    // de los dos números ingresados por parámetro 
    // Deberá calcular el promedio
    // y luego imprimir dicho valor en consola
    let promedio=((numero1+numero2)/2)
    if(promedio>=0 && promedio<=5){
        console.log("no as aprobado " + promedio)
    }else if(promedio>=5 && promedio<=10){
        console.log("felicidades as aprobado tu promedio es de" + promedio)
    }
}


promedio(10, 5);