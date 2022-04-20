//Calculadora de interes compuesto con aportacion mensual.

function interesCompuesto (capital,interes,plazo,aporte){
    let i = interes/1200
    let plazoMes = plazo*12
    let intAcumulado = Math.pow((1+i),plazoMes)

    return ((capital*intAcumulado) + ((aporte*(intAcumulado-1))/i))
}

alert("Hola! Nos alegra que estes interesado en ahorrar! a continuacion te pediremos inforamcion para calcuar tu ahorro")

let pregunta = prompt("Deseas continuar? ingresa SI o NO").toUpperCase()

while(pregunta!=="NO"){
    if (pregunta==="SI"){
        let capital = parseFloat(prompt("Ingrese CAPITAL INICIAL"))
        let interes = parseFloat(prompt("Ingrese interes ANUAL"))
        let plazo = parseFloat(prompt("Ingrese plazo del ahorro en AÑOS"))
        let aporte = parseFloat(prompt("Ingrese APORTE mensual"))

        let capitalFinal = interesCompuesto (capital,interes,plazo,aporte).toFixed(2);
        alert ("Su capital final sera: $"+capitalFinal)
        alert ("Los intereses generados fueron: $"+(capitalFinal - (aporte*(plazo*12))-(capital)).toFixed(2))
        alert ("En total los aportes suman: $"+(aporte*(plazo*12)))
        alert("¡GRACIAS POR ELEGIRNOS!")   
    }else {
        alert("Disculpe pero la opcion ingresada es invalida, por favor! ingrese SI o NO.")
    }
    pregunta = prompt("Desea realizar otro calculo? ingresa SI o NO").toUpperCase()
}
