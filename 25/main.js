
// document.cookie = "test1=Hello; SameSite=None; Secure";
// document.cookie = "test2=sxva; SameSite=None; Secure";

 const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test1="))
  ?.split("=")[1];
    
// myString.split("; ")// გაყოფას პარამეტრის მიხედვით, აბრუნებს მასივს
   
console.log("name=giorgi".startsWith("name"))// startsWith ამოწმებს  გადაცემულ პარამეტრზე იწყება თუ არა სთრინგი, აბრუნებს true-ს ან false

console.log(document.cookie);

console.log(cookieValue);

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2027 12:00:00 UTC";

// localStorage

console.log("[-------------------------------]");

localStorage.name = "giorgi"

localStorage.setItem("name2","giga")

console.log(localStorage.name);

console.log(localStorage.getItem("name2"));



sessionStorage.name = "nika"
console.log(sessionStorage.name);
console.log(sessionStorage.getItem("name"));

  let userName = document.querySelector("#userName")

function getUserName() {

  console.log(userName.value)
}

function clearUserName() {
  userName.value = null
}