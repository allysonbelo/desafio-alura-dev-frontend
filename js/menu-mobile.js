const menu = document.querySelector(".header__menu")
const container = document.querySelector(".container")

menu.addEventListener("click", () =>{
    container.classList.toggle("active")
})
