const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braço")

somar.addEventListener("click", (evento) =>{
    braco.value += 1
})


// criamos uma const pra armazenar a busca pelo elemento
// dizemos que elemento buscado quando clicado deve executar a função
// criamos a função que vai ser executada quando clicar
// criamos uma função anonima para executar um codigo atrelado a um evento

