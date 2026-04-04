
let arr1 = ["ვაშლი","მსხალი","ატამი"]


// console.log(arr1)

arr1.push("ფორთოხალი","სხვა") // ამატებს ბოლო ელემენტად

arr1.unshift("Tavshi") // ამატებს პირველ ელემენტად

// arr1.pop() // ბოლო ელემენტის წაშლა

// arr1.shift() // პირველი ელემენტის წაშლა

// console.log(arr1)

arr1.splice(2,0,"ჩამატებული1","ჩამატებული2")

// console.log(arr1)


arr1.splice(2,2,"შეცვლილი1")

// console.log(arr1)

let arr2 = ["მეორე1","მეორე2"]

let arr3 = arr1.concat(arr2)

console.log(...arr2)

let arr4 = [...arr1, ...arr2, "kidev damatebuli"]

// console.log(arr3)

// console.log(arr4)

//

let arr5 = [...arr2]

arr5.push("axali")

console.log(arr5,arr2)

let user = {
    name: "lika",
    age: 22,
    location: "თბილისი",
    password: null
}

let formatedUser = {
    ...user,
    password: user.password || user.password === 0 ? user.password :  "123", 
    location: "გორი"
}

// password: user.password ||  "123", 


console.log(user)
console.log(formatedUser)

