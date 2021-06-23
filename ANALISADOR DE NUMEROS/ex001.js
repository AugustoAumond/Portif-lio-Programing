var numero = []
var soma = 0
var media = 0
var C = 0
var mvalor = 0

function adicionar(){
var txtnum = document.querySelector('input#txtnum')
var num = Number(txtnum.value)
var lista = document.getElementById('lista')
    if (num == 0){
        window.alert('Error! Adicione um número a contagem!')
    }
    else if (num > 100 || num <= 0){
        window.alert ('Número inválido!')
        }
    else if (numero.indexOf(num) != -1){
        window.alert('Esse número já está na contagem!')
    }
    else {
        if (mvalor < num){
            mvalor = num
        }
        numero[C] = num
        soma+=num
        var option = document.createElement('option')
        option.innerText = `Você adicionou o número ${num}`
        lista.appendChild(option) 
        C++
        media = soma/C
   }     
}



function finalizar(){ 
    numero.sort()
    let dados = document.getElementById('res')
    let contador = C - 1
    dados.innerHTML = 
    ` Ao todos temos ${C} números na contagem <br>
    O maior valor da contagem é ${mvalor} <br>
    O menor valor da contagem é ${numero[0]}<br>
    A soma dos valores da contagem é ${soma} <br>
    A média dos valores da contagem é ${media.toFixed(2)}
    `
}