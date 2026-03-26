

// localStorage.saxeli = "giorgi"
// localStorage.raodenoba = 2
// localStorage.blackTheme = true

// let user = {
//     name: "lika",
//     password: "123"
// }

// JSON.stringify()  ობიექტის/მასივის JSON-ად (სთრინგად) გადატანა

// JSON.parse() JSON-ის ობიექტად ან მასივად გადატანა

// localStorage.user = JSON.stringify(user)


console.log(localStorage.saxeli);
console.log(Number(localStorage.raodenoba));

let blackTheme = localStorage.blackTheme === "true"

console.log(localStorage.blackTheme, blackTheme);

let localUser = JSON.parse(localStorage.user)

console.log(localStorage.user);

console.log(localUser.name, localUser.password);

// localStorage.removeItem("saxeli")

localStorage.clear();