
let x = 33;
let surati = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLGGVcjyFtP7Z_SYFGwuS_mRQxkk9MfKEUQ&s";

// document.getElementById("container").textContent = document.getElementById("container").textContent + "გამარჯობა"

let cont = document.getElementById("container")

cont.textContent += "<h1>გამარჯობა</h1>"

cont.innerHTML += `
    <h1 class="blue">
        გამარჯობა ${x}
    </h1>
    <img src="${surati}">
`
// ელემენტების შექმნა

const title = document.createElement("h1");
title.textContent = `მეორე გამარჯობა ${x}`;
title.className = "red";
title.id = "title1";
title.style.backgroundColor = "black";

cont.appendChild(title);

let htmlSurati = document.createElement("img");
htmlSurati.src = surati;
htmlSurati.alt = "არ ჩაიტვირთა";

cont.appendChild(htmlSurati);

console.log(title);
