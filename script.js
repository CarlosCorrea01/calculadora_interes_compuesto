//Calculadora de interes compuesto con aportacion mensual y calculadora de interes compuesto sin aportacion.
// 18/04/22 desafio entregable - operaciones entre dos numeros

let numeroUno = 0;
let numeroDos = 0;
let operacion = ""
alert("Hola! En este pequeño algoritmo realizaremos una mini calculadora para el desafio complementario N°1")

let pregunta = prompt("Listo? pon SI para continuar o NO para terminar, por favor ingresa la respuesta en mayusculas")
let confirmacion = ""

while(pregunta!="NO"){
    if (pregunta==="SI"){
        numeroUno = parseFloat(prompt("Ingresa el primer numero"));
        numeroDos = parseFloat(prompt("Ingresa el segundo numero"));
        operacion = prompt("Que operacion realizaras? ingresa - ; + ; * ; /");
        alert("Usted ingreso:" + " "+ numeroUno+" "+operacion+" "+numeroDos+"."+" El resultado sera:")
        if (operacion==="-" ){
            alert(numeroUno-numeroDos);
        }else if (operacion === "+"){
            alert(numeroUno+numeroDos);
        }else if(operacion==="*"){
            alert(numeroUno*numeroDos);
        }else if (operacion === "/"){
            alert(numeroUno/numeroDos);
        }else {
            alert("El valor ingresado no es correcto, por favor intentalo nuevamente")
        }
    }else{
        alert("Ingresa SI o NO en mayusculas, vuelve a intentarlo")
    }
    pregunta = prompt("Deseas realizar otra operacion? SI o NO")
}