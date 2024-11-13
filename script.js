const nav = document.querySelector("#nav")
const nav2 = document.querySelector("#nav2")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add('visible')
    nav2.classList.add('visible')
})

cerrar.addEventListener("click", () => {
    nav.classList.remove('visible')
    nav2.classList.remove('visible')
})