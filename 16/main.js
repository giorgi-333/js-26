

function add() {

    console.log(3+4)
}



add()

let add2 = () => {
    console.log(8)
}

add2()


let btn = document.getElementById("btn")


btn.addEventListener("click", e => {
    console.log(e.target)
    // e.target ელემენტი რომელსაც აკლიკებთ
    e.target.style.fontSize = "30px";
})

//

let conts = document.getElementsByClassName("cont")

// console.log(conts[1]);

//

let title1 = document.querySelector(".cont")
// მხოლოდ პირველი კონტეინერი
console.log(title1); 

let conteiners = document.querySelectorAll(".cont")
// ინიშნება ყველა ელემენტი
console.log(conteiners)