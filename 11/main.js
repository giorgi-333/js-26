

let qalaqebi = ["თბილისი","ქუთაისი","გორი","რუსთავი", "ფოთი"]

for(let i=0; i < qalaqebi.length; i++) {
    console.log(qalaqebi[i], i)
}

console.log("------")

for(let i in qalaqebi) {
    console.log(qalaqebi[i], i)
}
console.log("------")

for(let item of qalaqebi) {
    console.log(item)
}