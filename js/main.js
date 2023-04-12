const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) =>{
    console.log(evento)
})

function dizOi(nome){
    console.log("Olá " + nome)
    console.log("Bem vindo ao Robotron 2000")
}

dizOi("Nia")

// criamos uma const pra armazenar a busca pelo elemento
// dizemos que elemento buscado quando clicado deve executar a função
// criamos a função que vai ser executada quando clicar
// criamos uma função anonima na linha 3-4 para executar um codigo atrelado a um evento
//

