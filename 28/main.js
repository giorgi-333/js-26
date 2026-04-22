
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result,"------------");
//   // Expected output: "resolved"
// }

// asyncCall();

// resolveAfter2Seconds().then(res => {
//     console.log("1222",res);
// })

function getData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
}

async function test1() {
    console.log(0)
    let res = await getData1();
    console.log(res);
    console.log(2);
}

test1()


// try {
  
// } catch (error) {
//   console.error(error);
// }


// try {
//     ter1()
//     console.log(34);
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log("finnaly")
// }

// console.log("Hello world");