
// SEGUIMOS TEMÁTICA FRIENDS ----->



let quiz = prompt("¿Eres capaz de resolver este QUIZ sobre FRIENDS?").toLowerCase()
    if(quiz == "si"){
        alert("Es hora de demostrarlo!")
    }else{
        alert("Animate! No es que estuviera en juego tu departamento")
    }



let respuesta1 = "ursula";
let respuesta2 = "un pato y un gallo" && "un gallo y un pato";
let respuesta3 = "monica y chandler" && "chandler y monica";
let respuesta4 =  "3";
let respuesta5 = "nadie sabe";

let pregunta1 = "¿Cómo se llama la hermana gemela de Phoebe?"
let pregunta2 = "¿Qué mascotas tienen Joey y Chandler?"
let pregunta3 = "¿Qué personajes del grupo no puede tener hijos?"
let pregunta4 = "¿Cuántos divorcios tuvo Ross?"
let pregunta5 = "¿De qué trabaja Chandler?" 


let vidas = 6
let respuestasCorrectas = 0;


function comparar (pregunta, respuesta){

    let respuestaIngresada = prompt(pregunta).toLowerCase()  

    if(respuestaIngresada !== respuesta){
        vidas -- // vidas = vidas - 1
        alert(`Incorrecto, te quedan ${vidas} vidas`)
    }else{
        alert("Respuesta correcta")
        respuestasCorrectas++
    }

}




comparar(pregunta1, respuesta1)
comparar(pregunta2, respuesta2)
comparar(pregunta3, respuesta3)
comparar(pregunta4, respuesta4)
comparar(pregunta5, respuesta5)

alert(`Usted hizo ${respuestasCorrectas} respuestas correctas de 5`)







// Intento para crear un ciclo dentro de una función --> en proceso

/*

    function comparar (pregunta, respuesta){
    
        while((respuestaIngresada !== respuesta) && (vidas >= 1) ){

            let respuestaIngresada = prompt(pregunta).toLowerCase() 
        

            if(respuestaIngresada !== respuesta){
                vidas -- // vidas = vidas - 1
                alert(`Incorrecto, te quedan ${vidas} vidas`)
            }else{
                alert("Te quedaste sin vidas")
                
            }
        }
    }

*/


