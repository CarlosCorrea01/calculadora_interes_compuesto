
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
// prueba 

const arrayUsuarios = [];

const usuario001 = new Usuario ("german","garmendia","32","argentina","germi12","dadasd")
const usuario002 = new Usuario ("germanadas","garmendasdasdia","32","argeasdantina","geasdmi12","dasadasd")

arrayUsuarios.push(usuario001,usuario002)

usuario001.nuevoAhorroInversion("auto",1000,50,1,3000)
usuario001.nuevoAhorroInversion("vacaciones",1000,50,1,5000)
console.log(arrayUsuarios)





//Sacar comentario de abajo y comentar lo de arriba, es un prototipo donde se ingresan los usuarios y se alazenan en el array usuarios

/* let preguntaRegistro = prompt("Desea registrarce? ingrese si o no").toUpperCase()


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
} */
