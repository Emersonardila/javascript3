"use strict";

/* Inove Coding School
 * Ejemplos de código de clase.
 * Funciones
 * Este archivo sirve como borrador con el código visto en la clase.
 */

let variableGlobal = 30;

function pruebaContexto() {
    let variableLocal = 10;
    alert(`Valor global: ${variableGlobal}`)
}

variableGlobal = 15;

pruebaContexto();

variableGlobal = 50;

pruebaContexto();