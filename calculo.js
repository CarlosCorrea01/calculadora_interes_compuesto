
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
const capInicial =  document.getElementById("capInicial")
const tasaIntereses = document.getElementById("tasaIntereses")
const plazo = document.getElementById("plazo")
const aporte = document.getElementById("aporte")
const objetivo = document.getElementById("objetivo")
const calculo = document.getElementById("calculo")

calculo.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const Ahorro1 = new AhorroInversion(objetivo.value,capInicial.value,tasaIntereses.value,plazo.value,aporte.value) 
    let planes = document.getElementById("planes")
    planes.innerHTML += `
                         <div class="planesContenedor mt-2 d-flex justify-content-center align-items-center">
                           <div class="mt-3">
                             <p>
                               Objetivo: <span>${Ahorro1.objetivo}</span>
                                | Capital: <span>$${Ahorro1.capital}</span>
                                | Tasa de Interes: <span>${Ahorro1.interes}%</span>
                                | Plazo: <span>${Ahorro1.plazo*12} meses</span>
                                | Capital Final: <span class="spanCapFin">$${Ahorro1.calcularCap()}</span>
                             </p>
                           </div>
                         </div>   
    
    `
    calculo.reset()
 })
 