

let x = 10

console.log(x > 20);

if (x > 20) {
    console.log("X მეტია მეორე რიცხვზე");
} else if (x === 20) {
    console.log("ტოლები არის");
    // 
} else {
    console.log("არ არის მეტი");
}

let tve = 7
let text 

switch (tve) {
    case 1:
        text = "იანვარი";
        break;
    case 2:
        text = "თებერვალი";
        break;
    case 3:
        text = "მარტი";
        break;
    default:
        text = "თვე არ მოიძებნა";
}

console.log(text);

let a = -3
let b = 4
// && და ოპერატორი, ორივე უნდა იყოს სწორი
if (a > 0 && b > 0) {
    console.log("ორივე ციფრი დადებითია");
} else {
    console.log("ერთ ერთი მაინც არაა დადებითი");
}

//

// || ან ოპერატორი - ერთ ერთი უნდა იყოს სწორი

if (a > 0 || b > 0 ) {
    console.log("მინიმუმ ერთ-ერთი დადებითია");
} else {
    console.log("არცერთი არაა დადებითი");
}

//

// console.log(6 % 2); გვიწერს გაყოფის შედეგად დარჩენილ ნაშთს

// 0 არის false If-ში
// if (0) {
//     console.log("დაბეჭდა რაღაც");
// }