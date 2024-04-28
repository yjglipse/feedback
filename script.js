let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao =>{
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento){
    let nota = evento.targte.innerText

    localStorage.setItem("nota", nota)
}