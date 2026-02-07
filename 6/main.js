

for(let i=0; i < 10; i++) {
    if(i === 5 || i === 6) {
        continue // გამოტოვებს ციკლს
    }
    console.log(i)
}

console.log("------------")

for(let i=0; i < 10; i++) {
    if(i === 5) {
        break // აჩერებს
    }
    console.log(i)
}