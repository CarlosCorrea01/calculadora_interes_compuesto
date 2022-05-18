
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
const user = document.getElementById("user")
const password = document.getElementById("password")
const login = document.getElementById("login")

login.addEventListener('submit',(e)=>{
    e.preventDefault()
    let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===user.value && usuarios.contrasena===password.value))
    let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===user.value && usuarios.contrasena===password.value)
    if(user.value ==="" || password.value ==="" || busqueda==-1){
        let msjAlert= document.getElementById("msjAlert")
        msjAlert.innerHTML ='<p style="color:red">Usuario y contraseña incorrectos</p>'
        login.reset()
    }else if(user.value!=="" && password.value !=="" && busqueda!=-1){
     //window.open('pagusu.html')
     alert("Bienvenido "+usuarioX.nombre+ " "+ usuarioX.apellido)
    }else{
        alert("Operaciones no validas")
    }
})



/*
const usuario = document.getElementById("usuario");
const contra = document.getElementById("contra");
const ingresar = document.getElementById("ingresar");
ingresar.addEventListener('click',()=>{   
    let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===usuario.value && usuarios.contrasena===contra.value))
    let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===usuario.value && usuarios.contrasena===contra.value)
    if(usuario.value ==="" || contra.value ==="" || busqueda==-1){
        let mensaje = document.getElementById("logForm");
        mensaje.innerHTML +='<p style="color:red">Usuario y contraseña incorrectos</p>'
        setTimeout(function() {
            location.reload();
          }, 1000);
    }else if(usuario.value!=="" && contra.value !=="" && busqueda!=-1){
     location.href="pagusu.html"
     let bienvenida = document.getElementById("navBienvenida")
     bienvenida.innerHTML='<p>Bienvenido </p>'
    }
})*/





