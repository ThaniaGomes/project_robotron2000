const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelector(".controle-ajuste")

controle.forEach((elemento) => { 
    elemento.addEventListener("click", () => {
        console.log(evento.target)
    })
})

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
// criamos uma const pra armazenar a busca pelo elemento
// dizemos que elemento buscado quando clicado deve executar a função
// criamos a função que vai ser executada quando clicar
// criamos uma função anonima para executar um codigo atrelado a um evento

