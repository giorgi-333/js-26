
let saxeli = document.querySelector("#saxeli")
let agwera = document.querySelector("#agwera")

let weli = document.querySelector("#weli")

let etanxmeba = document.querySelector("#etanxmeba")



function forma() {

    let selectedFeri = document.querySelector("input[name='feri']:checked")

    const monishnuli = selectedFeri ? selectedFeri.value : "არ მოუნიშნავს"

    console.log(monishnuli)

    console.log(saxeli.value, agwera.value, weli.value, etanxmeba.checked)
}