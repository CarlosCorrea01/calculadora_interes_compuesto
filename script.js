
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

const arrayUsuarios = []

let pregunta = prompt("Desea registrarce? ingrese si o no").toUpperCase()


while(pregunta !== "NO"){
    if(pregunta === "SI"){
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
    pregunta = prompt("Desea registrarce? ingrese si o no").toUpperCase()
} 
let = preguntaUsu = ""
let ingUsu = prompt("Ingrese su usuario")
let ingContra= prompt("ingrese su contraseña")
let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===ingUsu && usuarios.contrasena===ingContra))
let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===ingUsu && usuarios.contrasena===ingContra)

while(){
    
}
alert("Bienvenido "+busqueda.nombre+ " "+ busqueda.apellido)
/*
if(((busqueda.planes).length)==0){
    alert("No tiene ningun plan de ahorro/Inversion,Crearemos uno")
    
    busqueda.nuevoAhorroInversion(
    prompt("Cual es el motivo del ahorro/inversion. Ej: Auto neuvo"),
    parseFloat(prompt("Ingrese capital inicial si lo tiene")),
    parseFloat(prompt("Que rendimiento ANUAL tendra su ahorro/Inversion?")),
    parseInt(prompt("Cuanto tiempo planea ahorrar/Invertir? en AÑOS")),
    parseFloat(prompt("Ingrese capital que aportara cada mes"))
    )
    alert("Genail tiene "+(busqueda.planes).length+" plan/es creados")
    preguntaPlan = prompt("DeASDSAD")
   
}   */




/*
arrayUsuarios.forEach((usuarios,indice)=>{
    let ingUsu = prompt("Ingrese su usuario")
    let ingContra= prompt("ingrese su contraseña")
    let indiceIng = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===ingUsu && usuarios.contrasena===ingContra))
    if (indice === indiceIng){
        console.log("Bienvenido "+usuarios.nombre + " "+ usuarios.apellido)
    }else{
        console.log("no existe")
    }
})*/