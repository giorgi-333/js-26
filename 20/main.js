let names = ["nika", "lika", "giga"];

let nameBtn = document.querySelector("#nameBtn");

nameBtn.addEventListener("click", () => {
  let isName = names.includes("lika");

  console.log(isName);

  if (isName) {
    alert("moidzebna");
  } else {
    alert("ar moidzebna");
  }
});


let name1 = "konstantine"

console.log(name1.includes("ko"))


let findNames = names.filter(
    item => {
        console.log(item)
        return item.includes("ka")
})

console.log(findNames)

let searchName = document.querySelector("#searchName")

function searchNames() {
    result.textContent = searchName.value
}

// focus

// searchName.addEventListener("input",e=> {
//     result.textContent = e.target.value
// })

searchName.addEventListener("change",e=> {
    result.textContent = e.target.value
    console.log(Number(e.target.value))
})

// searchName.addEventListener("focus",e=> {
//     searchName.value = null
// })