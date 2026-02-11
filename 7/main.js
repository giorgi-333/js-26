
let x = 5;

if (x != 3) {
    console.log("არ უდრის");
} else {
    console.log("უდრის");
}

// !=  არ უდრის

// !==  -> === ცვლადის ტიპითაც ამოწმებს
// !=  -> ==  მხოლოდ მნიშვნელობას ამოწმებს

console.log(x !== 3);

let ages = [22, 44, 23, 4, 56, 65]

let products = ["ვაშლი", "მსხალი", "ატამი", "ფორთოხალი"]
// products.length - მასივის სიგრძე (ელემნტების რაოდენობა)

// console.log(products.length);

// console.log(products[products.length - 1]);

for (let i = 0; i < products.length; i++) {
    console.log(i, products[i]);
    document.write(i+1 + " - " + products[i] + "<br>")
}

