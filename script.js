
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

arrayUsuarios.push(new Usuario ("Fabricio","Correa","Argentina",23,"fcorrea17","011015"))
arrayUsuarios.push(new Usuario ("Francis","Acosta","Argentina",23,"acosti78","fcorrea17"))
arrayUsuarios.push(new Usuario ("Aldana","Barrios","Argentina",23,"Aldi","211298"))

const usuario = document.getElementById("usuario");
const contra = document.getElementById("contra");
const ingresar = document.getElementById("ingresar");
let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===usuario.value && usuarios.contrasena===contra.value))
let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===usuario.value && usuarios.contrasena===contra.value)
ingresar.addEventListener('click',()=>{
    let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===usuario.value && usuarios.contrasena===contra.value))
    let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===usuario.value && usuarios.contrasena===contra.value)   
    if(usuario.value ==="" || contra.value ==="" || busqueda==-1){
        let mensaje = document.getElementById("logDiv");
        mensaje.innerHTML +='<p style="color:red">Usuario y contraseña incorrectos</p>'
        
    }else if(usuario.value!=="" && contra.value !=="" && busqueda!=-1){
        alert("Bienvenido "+usuarioX.nombre + " " + usuarioX.apellido)
    }
})

