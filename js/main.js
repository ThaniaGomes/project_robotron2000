const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log('Oi ' + nome)
    console.log('Bem-vindo ao Robotron 2000')
}

dizOi("Pedro") 

// criamos uma const pra armazenar a busca pelo elemento
// dizemos que elemento buscado quando clicado deve executar a função
// criamos a função que vai ser executada quando clicar
// criamos uma função anonima para executar um codigo atrelado a um evento

