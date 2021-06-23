function gerartabuada(){
let ntxt = document.getElementById('numerotxt')
let resultxt = document.getElementById('resultado')
let n = Number(ntxt.value)
C = 0
resultxt.innerHTML = ''

if (ntxt.value.length == 0){
    window.alert('Escreva um número para calcular a tabuda!')
}
else {
    for (C = 1; C <= 10; C++){
        R = n * C
        resultxt.innerHTML += `<p> ${C} X ${n} = ${R} </p>`
         }
    }
}

