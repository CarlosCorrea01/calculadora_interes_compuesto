
const user = document.getElementById("user")
const password = document.getElementById("password")
const login = document.getElementById("login")

login.addEventListener('submit',(e)=>{
    let busqueda = arrayUsuarios.indexOf(arrayUsuarios.find(usuarios => usuarios.usuario===user.value && usuarios.contrasena===password.value))
    let usuarioX = arrayUsuarios.find(usuarios => usuarios.usuario===user.value && usuarios.contrasena===password.value)
    e.preventDefault()
    if(user.value ==="" || password.value ==="" || busqueda==-1){
        let msjAlert= document.getElementById("msjAlert")
        msjAlert.innerHTML ='<p style="color:red">Usuario y contraseña incorrectos</p>'
        login.reset()
    }else if(user.value!=="" && password.value !=="" && busqueda!=-1){
     window.open('secciones/panel.html','_self')
     //let saludoIngreso = document.getElementById("saludoIngreso")
     //saludoIngreso.innerHTML = `<p class="nomUsu">Bienvenido<span>${usuarioX.nombre} ${usuarioX.apellido}</span></p>`
     alert("Bienvenido "+usuarioX.nombre+ " "+ usuarioX.apellido)
    }else{
        alert("Operaciones no validas")
    }
})







