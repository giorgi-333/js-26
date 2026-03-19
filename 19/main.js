


let numbers = [5, 7, 11, 9, 12, 44]

let isNumber = numbers.indexOf(12)

// console.log(isNumber);

// if (isNumber === -1) {
//     console.log("მასივში არ მოიძებნა");
// } else {
//     console.log(isNumber);
// }


let cifri = numbers.findIndex(item => item > 9)

// console.log(cifri);


let gafiltrulebi = numbers.filter((item,i,arr) => {
    // ..
    console.log(item, i, arr);
    return item > 9
})

console.log(gafiltrulebi);


let persons = [
    {
        id: 1,
        age: 23,
        name: "giga"
    },
    {
        id: 2,
        age: 16,
        name: "beqa"
    },
    {
        id: 3,
        age: 17,
        name: "nika"
    }
]

let filteredPersons = persons.filter(el => el.age <= 18)

console.log(filteredPersons);