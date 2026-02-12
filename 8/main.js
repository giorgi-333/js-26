


let x = 3
let y = 9

document.write("<h1>" + x + "-ს დამატებული " + y
    + " არის " + (x + y) + "</h1>")

document.write(`<h1> ${x}-ს დამატებული ${y} არის ${x + y}  </h1>`)

// let userName = "გიორგი"
// let userSurName = "ხვედელიძე"
// let useAge = 22
// let userLocation = "გორი"

// console.log(userName, userSurName, useAge, userLocation)

let user = {
    name: "გიორგი",
    surName: "ხვედელიძე",
    age: 22,
    location: "გორი"
}

// user["name"] იგივეა რაც user.name

console.log(user.name, user.surName, user.age, user.location)

document.write(user.surName)

let users = [
    {
        name: "გიორგი",
        surName: "ხვედელიძე",
        age: 22,
        location: "გორი"
    },
    {
        name: "ნიკა",
        surName: "სხვაგავრიძე",
        age: 55,
        location: "ქუთაისი"
    }
]

// console.log(users[1].name);

for (let i = 0; i < users.length; i++) {
   document.write(`<h3 class="n1"> სახელი: ${users[i].name} <br> ასაკი: ${users[i].age} </h3>`)
}
