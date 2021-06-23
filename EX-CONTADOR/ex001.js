function contar(){
let inicio = document.getElementById('Inicio');
let fim = document.getElementById('Fim');
let passo = document.getElementById('Passo');
let resultado = document.getElementById('resultado')

resultado.innerHTML = " "
    if (Number(inicio.value) == 0|| Number(fim.valeu) == 0|| Number(passo.value) == 0){
        window.alert('Coloque os dados')    
    }
    else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
        if (i < f){
        for (var c = i; c <= f; c += p){
            resultado.innerHTML += `\u{1F449} ${c}  `
            }
        }
        else {
            for (var c = i; c >= f; c -= p){
                resultado.innerHTML += `\u{1F449} ${c}  `
                }
        }
        resultado.innerHTML += `\u{1F449} \u{1F3C1}`
    }
}

