
class AhorroInversion{
    constructor(objetivo,capital,interes,plazo,aporte){
        this.objetivo = objetivo
        this.capital = capital;
        this.interes = interes;
        this.plazo = plazo;
        this.aporte = aporte;
    }
    calcularCap(){
        const i = this.interes/1200;
        const plazoMes = this.plazo*12;
        const intAcumulado = Math.pow((1+i),plazoMes)
        
        return (((this.capital*intAcumulado) + ((this.aporte*(intAcumulado-1))/i)).toFixed(2))
    }

}

class Usuario {
    
    constructor (nombre,apellido,edad,nacionalidad,usuario,contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.planes = [];
    }

    nuevoAhorroInversion(obj,cap,int,plzo,apor){
        this.planes.push(new AhorroInversion (obj,cap,int,plzo,apor))
    }
    
    cambiarUsuario(nuevoUsuario){
        this.usuario = nuevoUsuario;
    }
    cambiarContrasena(nuevaContrasena){
        this.usuario = nuevaContrasena;
    }

}

const arrayUsuarios = [];
const usuario001 = new Usuario ("german","garmendia","32","argentina","germi12","dadasd")
const usuario002 = new Usuario ("germanadas","garmendasdasdia","32","argeasdantina","geasdmi12","dasadasd")
arrayUsuarios.push(usuario001,usuario002)
console.log(arrayUsuarios)
usuario001.nuevoAhorroInversion("auto",1000,50,1,3000)
usuario001.nuevoAhorroInversion("vacaciones",1000,50,1,5000)

for (const propiedades in usuario001) {
    if (propiedades=="ahorroInversion") {
        for (const ahorro of planes) {
            console.log(ahorro)
        }
    } 
    
}
/*let preguntaRegistro = prompt("Desea registrarce? ingrese si o no").toUpperCase()


while(preguntaRegistro != "NO"){
    if(preguntaRegistro === "SI"){
        let nombreProm = prompt("Ingrese nombre").toUpperCase()
        let apellidoProm = prompt("Ingrese apellido").toUpperCase()
        let nacionalidadProm = prompt("Ingrese nacionalidad").toUpperCase()
        let edadProm = parseInt(prompt("Ingrese edad"))
        let usuarioProm = prompt("Ingrese usuario")
        let contrasenaProm = prompt("Ingrese contraseña")
        arrayUsuarios.push(new Usuario (nombreProm,apellidoProm,nacionalidadProm,edadProm,usuarioProm,contrasenaProm) )
    }else{
        alert("Ingrese una respuesta valida, intente nuevamente")
    }
    preguntaRegistro = prompt("Desea registrarce? ingrese si o no").toUpperCase()
}




for (let usuarios of arrayUsuarios) {
    for (let propiedad in usuarios ) {
        for (let propiedad in usuarios ) {
            
         }
    }
}*/


/*alert("Hola! Nos alegra que estes interesado en ahorrar! a continuacion te pediremos inforamcion para calcuar tu ahorro")

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
}*/

