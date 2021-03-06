
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

let ingUsu = prompt("Ingrese su usuario")
let ingContra= prompt("ingrese su contraseña")
let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===ingUsu && usuarios.contrasena===ingContra))
let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===ingUsu && usuarios.contrasena===ingContra)

if (busqueda != -1){
    alert("Bienvenido "+usuarioX.nombre + " " + usuarioX.apellido)
    if(((usuarioX.planes).length)==0){
        let crearPlan=prompt("No tiene ningun plan de ahorro/Inversion, necesita crar uno. Desea continuar SI o NO").toUpperCase()
        while (crearPlan!=="SALIR"){
            if(crearPlan==="SI"){
                usuarioX.nuevoAhorroInversion(
                    prompt("Cual es el motivo del ahorro/inversion. Ej: Auto neuvo"),
                    parseFloat(prompt("Ingrese capital inicial si lo tiene")),
                    parseFloat(prompt("Que rendimiento ANUAL tendra su ahorro/Inversion?")),
                    parseInt(prompt("Cuanto tiempo planea ahorrar/Invertir? en AÑOS")),
                    parseFloat(prompt("Ingrese capital que aportara cada mes"))
                    )
                    alert("Genail tiene "+(usuarioX.planes).length+" plan/es creados")
            }else if(crearPlan==="NO"){
                alert("Necesita crear por lo menos un plan")
            }else{
                alert("Seleccion no valida")
            }
           
            crearPlan = prompt("Si ya creo un plan ingrese SALIR, de lo contrario ingrese SI para crar un plan").toUpperCase();     
        }
            
       
        (usuarioX.planes).forEach(planes=>{{
            alert("El capital final para el objetivo "+planes.objetivo+" sera de $"+planes.calcularCap()+" esto en "+planes.plazo*12+" meses,"+
            "con un capital inicial de $"+planes.capital+" y aportes mensuales de $"+planes.aporte)
        }})
    }
}else{
    alert("No encontramos el usuario")
}
