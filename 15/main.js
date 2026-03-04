
let result = document.getElementById("res");

// let x = 3, y = 4;

function jami(a,b) {
    let sum = a + b
    result.innerHTML += sum + "<br>"
}

jami(7,8)
jami(1,9)
jami(11,44)



let z = 0

function add() {
    z += 10
    console.log(z)
}


function changeStyle(item) {
    item.textContent = "gauqmebulia"
    item.classList.add("red")
}