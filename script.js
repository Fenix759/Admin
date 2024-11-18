
/*Abir-Cerrar nav */
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add('visible')
})
cerrar.addEventListener("click", () => {
    nav.classList.remove('visible')
})


/*Seleccionar Bloque*/
const Amb_A = document.querySelector("#Ambiente_A")
const Amb_B = document.querySelector("#Ambiente_B")
const Amb_C = document.querySelector("#Ambiente_C")
const Blo_A = document.querySelector("#Bloque_A")
const Blo_B = document.querySelector("#Bloque_B")
const Blo_C = document.querySelector("#Bloque_C")

Blo_A.addEventListener("click", () => {
    Bloque_A.classList.add('seleccionar-bloque')
    Bloque_B.classList.remove('seleccionar-bloque')
    Bloque_C.classList.remove('seleccionar-bloque')
    Amb_A.classList.add('spawn-amb')
    Amb_B.classList.remove('spawn-amb')
    Amb_C.classList.remove('spawn-amb')
})
Blo_B.addEventListener("click", () => {
    Bloque_A.classList.remove('seleccionar-bloque')
    Bloque_B.classList.add('seleccionar-bloque')
    Bloque_C.classList.remove('seleccionar-bloque')
    Amb_A.classList.remove('spawn-amb')
    Amb_B.classList.add('spawn-amb')
    Amb_C.classList.remove('spawn-amb')
})
Blo_C.addEventListener("click", () => {
    Bloque_A.classList.remove('seleccionar-bloque')
    Bloque_B.classList.remove('seleccionar-bloque')
    Bloque_C.classList.add('seleccionar-bloque')
    Amb_A.classList.remove('spawn-amb')
    Amb_B.classList.remove('spawn-amb')
    Amb_C.classList.add('spawn-amb')
})

