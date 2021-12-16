const linguagem = document.querySelector("#linguagem")
const areaDoCodigo = document.querySelector(".wrapper-code")
const botao = document.querySelector(".codigo__button")

window.onload = aplicaHighlight

function aplicaHighlight(){
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="area-codigo hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" spellcheck="false"></code>`
    areaDoCodigo.querySelector("code").textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector("code"))
}

botao.addEventListener("click", ()=>{
    aplicaHighlight()
})