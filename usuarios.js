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