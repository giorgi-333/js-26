

let user = {
    name: "giga",
    age: 22
}



let ages = [34, 56, 23, 33, 44, 78, 33]

let usersInfo = [
    {
        name: "giga",
        age: 22
    },
    {
        name: "lika",
        age: 23
    }
]

// console.log(users[1])

let users = ["giga", "nika", "lika"]

for (let i = 0; i < users.length; i++) {
    document.getElementById("result").innerHTML += `<h1 class="red"> ${users[i]} </h1>`
}

// for(let i in users) {
//     console.log(users[i],i)
// }

for (let user of users) {
    console.log(user)
}