let CALCULADORA = document.getElementById('calcular')

CALCULADORA.addEventListener('click',()=>{
    const CALCULAR = document.getElementById('calcular')
    const ERROR = document.getElementById('error')
    let flu = document.getElementById('flu')
    let man = document.getElementById('man')
    let peso = document.getElementById('peso').value
    alert(peso)
    let a = calcular(peso)
    if (peso != 0){
        flu.style.display = "block"
        man.style.display = "block"
        flu.innerText = `${a[0]} cc/hr`
        man.innerText = `m+m/2 : ${a[1]} cc/h`
    }
})

function alert(valor) {
    let alert = document.getElementById('alert')
    if (valor == 0){
        window.alert('cuidado')

        alert.style.display = "block"

    }else{
        alert.style.display = "none"
    }
}
//calculo de los ml por peso
function calcular(peso){
    let ml_10kg = 1000
    let ml_20kg = 500
    if (peso >= 30){
        let cantiMl = ( (peso * 4) + 7) / (peso + 90)
        let scUno = (cantiMl * 1500).toFixed(2)
        let scDos = (cantiMl * 2000).toFixed(2)
        return [scUno, scDos]
    }   



    if(peso <= 10 ){
        let cantMl = peso*100
        let a = (cantMl / 24).toFixed(2)
        let b = (a * 1.5).toFixed(2)
        return [a, b]
        
    }
    if(peso > 10 && peso <= 20){
        let cantiMl = (peso - 10) * 50
        let a = ((cantiMl + ml_10kg) / 24).toFixed(2)
        let b = (a * 1.5).toFixed(2)
        return [a, b]

    }
    if(peso > 20 && peso < 30){
        let cantiMl = (peso - 20) * 20
        let a = ((cantiMl + ml_10kg + ml_20kg) / 24).toFixed(2)
        let b = (a * 1.5).toFixed(2)
        return [a,b]

    }
    
}
