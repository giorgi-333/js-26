

setTimeout(() => {
    console.log("mogesalmebit")
}, 3000)

// 1000 მილიწამი არის 1 წამი

let x = 0;
let intervalId 

 intervalId = setInterval(() => {
    console.log(++x)
    if (x === 10) {
        clearInterval(intervalId)
    }
},1000)