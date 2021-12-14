const corDeFundo = document.querySelector("#cor-fundo")
const elementoFundo = document.querySelector(".codigo__wrapper")

corDeFundo.addEventListener("change", function(){
    const valorCor = corDeFundo.value
    elementoFundo.style.backgroundColor = valorCor
})