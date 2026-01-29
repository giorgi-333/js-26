

let x = "giorgi"
let y = 12
// var z = 88
const pi = 3.14 // კონსტანტა - შეცვალა არ შეიძლება
x = "gia"
console.log(x, y)

let myText = document.getElementById("txt")

console.log(myText.textContent);

myText.textContent = "ახალი ტექსტი"

function textisDawera() {
   myText.textContent += " - სხვა - "
}

// textisDawera()