
let qalaqebi = ["თბილისი","ქუთაისი","გორი","რუსთავი", "ფოთი"]


// for(let i=0; i < qalaqebi.length; i++) {
//     document.write(i, qalaqebi[i] + "<br>")
// }


let user = {
    name: "giorgi",
    age: 33,
    location: "gori"
}

// document.write(user.name, user.age)

let users = [
    {
        name: "giorgi",
        age: 33,
        location: "gori"
    },
    {
        name: "nika",
        age: 22,
        location: "tbilisi"
    },
    {
        name: "lika",
        age: 33,
        location: "gori"
    }
]

for(let i=0; i< users.length; i++) {
    // console.log(users[i])
    document.write(`
        <div class="item"> 
            მომხმარებელი: 
            ${users[i].name} <br>
            ასაკი: ${users[i].age}
        </div>
        `)
}

result.innerHTML += `<h1> text 2 </h1>`