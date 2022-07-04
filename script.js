
// SEGUIMOS TEMÁTICA FRIENDS ----->


/*


let quiz = prompt("¿Eres capaz de resolver este QUIZ sobre FRIENDS?").toLowerCase()
    if(quiz == "si"){
        alert("Es hora de demostrarlo!")
    }else{
        alert("Animate! No es que estuviera en juego tu departamento")
    }




let respuesta1 = "ursula";
let respuesta2 = "un pato y un gallo" && "un gallo y un pato";
let respuesta3 = "monica y chandler";
let respuesta4 =  3;
let respuesta5 = "nadie sabe";




let  pregunta1, pregunta2, pregunta3, pregunta4, pregunta5;

do{
    pregunta1 = prompt("¿Cómo se llama la hermana gemela de Phoebe?").toLowerCase() 
    pregunta2 = prompt("¿Qué mascotas tienen Joey y Chandler?").toLowerCase() 
    pregunta3 = prompt("¿Qué personajes del grupo no puede tener hijos?").toLowerCase() 
    pregunta4 = parseFloat(prompt("¿Cuántos divorcios tuvo Ross?")) 
    pregunta5 = prompt("¿De qué trabaja Chandler?").toLowerCase() 
    alert("Veamos como te fue...")

   if(pregunta1 != respuesta1 || pregunta2 != respuesta2  || pregunta3 != respuesta3  || pregunta4 != respuesta4 || pregunta5 != respuesta5){
        alert("No has acertado todas las preguntas, vuelve a intentarlo!")
   }

    }while(pregunta1 != respuesta1 || pregunta2 != respuesta2  || pregunta3 != respuesta3  || pregunta4 != respuesta4 || pregunta5 != respuesta5)



let validacion = "aciertos";

switch(validacion){
    case "aciertos":
        alert("Felicidades! haz completado el desafío");
        break
}

*/



let quiz = prompt("¿Eres capaz de resolver este QUIZ sobre FRIENDS?").toLowerCase()
    if(quiz == "si"){
        alert("Es hora de demostrarlo!")
    }else{
        alert("Animate! No es que estuviera en juego tu departamento")
    }





let respuesta1 = "ursula";
let respuesta2 = "un pato y un gallo" && "un gallo y un pato";
let respuesta3 = "monica y chandler" ;
let respuesta4 =  3;
let respuesta5 = "nadie sabe";

let pregunta1 = "¿Cómo se llama la hermana gemela de Phoebe?"
let pregunta2 = "¿Qué mascotas tienen Joey y Chandler?"
let pregunta3 = "¿Qué personajes del grupo no puede tener hijos?"
let pregunta4 = "¿Cuántos divorcios tuvo Ross?"
let pregunta5 = "¿De qué trabaja Chandler?" 


let vidas = 6




function comparar (pregunta, respuesta){
    do{

        pregunta1 = prompt(`${pregunta1}`  == respuesta1).toLowerCase() 
        pregunta2 = prompt(`${pregunta2} ` == respuesta2).toLowerCase() 
        pregunta3 = prompt(`${pregunta3} ` == respuesta3).toLowerCase() 
        pregunta4 = prompt(`${pregunta4} ` == respuesta4).toLowerCase() 
        pregunta5 = prompt(`${pregunta5} ` == respuesta5).toLowerCase() 

    
        if(pregunta =! respuesta){
            vidas = vidas - 1
            alert(`Incorrecto, te quedan ${vidas} vidas`)
        }
       
    }while(pregunta =! respuesta || vidas >= 1 )


}




comparar(pregunta1, respuesta1)
comparar(pregunta2, respuesta2)
comparar(pregunta3, respuesta3)
comparar(pregunta4, respuesta4)
comparar(pregunta5, respuesta5)



