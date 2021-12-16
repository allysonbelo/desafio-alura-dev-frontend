/*
1 - pegar quem vai ser alterado
2 - pegar a cor
3 - adicionar a cor no fundo do codigo
*/

const fundoCodigo = document.querySelector(".codigo__wrapper")
const corSelecionada = document.querySelector("#cor-fundo")

corSelecionada.addEventListener("change", function(){
    const valor = corSelecionada.value
    fundoCodigo.style.backgroundColor = valor
})