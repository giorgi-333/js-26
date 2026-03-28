
let today = new Date()

console.log(today.getFullYear())


let days  = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]

let todayDay = today.getDay()

console.log(days[todayDay])

const str1 = "12";


console.log(str1.padStart(2, "0")); 


let date2 = new Date("2010-03-16")

console.log(date2)

let nextWeek = today.setDate(today.getDate() + 7);

console.log(new Date(nextWeek))


function getInputDate() {
    console.log(dateInput.value)
    console.log( new Date(dateInput.value))
}

