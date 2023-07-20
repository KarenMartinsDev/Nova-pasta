
//Variáveis
// Declaro a variável das telas
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Declaro a variável dos botões
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//Declaro a variável que vai inventar um número e colotar as tentativas
let randomNumber = Math.round(Math.random() * 10)
let xAttemps= 1

//Evento do que tem que acontecer quando o botão for clicado
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

//Callback
//Função responsavel pela tentativa
function handleTryClick (event){

    event.preventDefault ()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        toogleScreen()
        screen2.querySelector("h2").innerText= `Acertou em ${xAttemps} tentativas!`
    }

    inputNumber.value = ""
    xAttemps ++
}


// Função de quando for tentar novamente
function handleResetClick (){
    toogleScreen()
    xAttemps = 1
    let randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}





