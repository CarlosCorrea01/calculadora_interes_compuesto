//Calculadora de interes compuesto con aportacion mensual y calculadora de interes compuesto sin aportacion.

function intCompSinAporte (capitalInicial,interesAcumulado){
    let montoSinAporte = capitalInicial*interesAcumulado.toFixed(2)
    console.log(montoSinAporte)
}
function intCompConAporte (capitalInicial,interesAcumulado,aporte,i){
    let montoConAporte = ((capitalInicial*interesAcumulado)+(((aporte*(interesAcumulado-1))/i))).toFixed(2)
    console.log(montoConAporte)
}


let capitalInicial = parseFloat(prompt("ingrese capital inicial $"))
let plazo = parseFloat(prompt("Ingrese plazo de inversion/ahorro en AÑOS"))
let intereses = parseFloat(prompt("Ingrese tasa de rendimiento estimada ANUAL"))
let aporte = parseFloat (prompt("Ingrese aporte mensual"))

let i = intereses/1200
let n = plazo*12
let interesAcumulado = Math.pow ((i+1),n)

do {
    if 
} while (condition);
