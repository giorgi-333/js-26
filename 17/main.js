
let clickItem = document.querySelector("#clickItem")

//  () => {   alert(123)  }

clickItem.addEventListener("click",() => {
    alert(123)
})

let items = document.querySelectorAll(".cont")

let numbers = [4,7,3,5,6]

// numbers.forEach( (item,i) => {
//     console.log(item,i)
// })

let editedNumbers = numbers.map((item,i)=> {
    let newNumber = item * i
    return newNumber
})

console.log(editedNumbers)




function sumNumbs(a,b) {
    return a + b
}

console.log(sumNumbs(5,6) )