const divEditorCodigo = document.querySelector("#editor-codigo")
const divComunidade = document.querySelector("#comunidade")

const linkCodigo = document.querySelector("#link-codigo")
const linkComunidade = document.querySelector("#link-comunidade")

if(linkCodigo == document.URL){
    divEditorCodigo.classList.add("selected")
    divComunidade.classList.remove("selected")
}

else if(linkComunidade  == document.URL){
    divEditorCodigo.classList.remove("selected")
    divComunidade.classList.add("selected")
}