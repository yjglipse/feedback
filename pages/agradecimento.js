function pegarNota(){
    let nota= localStorage.getItem("nota")

    let paragrafoNota = document.querySelector(".p_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()