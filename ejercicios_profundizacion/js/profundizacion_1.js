/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/function promedio2(n1,n2,n3,n4,n5){
    console.log("Funcion promedio 2.0")

    let promedio=((n1+n2+n3+n4+n5)/5)
    if(promedio>=0 && promedio<=5){
        console.log("no as aprobado " + promedio)
    }else if(promedio>=5 && promedio<=10){
        console.log("felicidades as aprobado tu promedio es de" + promedio)
        alert("este promedio es posible gracias a sus 5 notas de sus ultimas materias ")
    }
}
promedio2(5,10,15,5,4)