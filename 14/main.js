


const text2 = document.getElementById("text2");
const text1 = document.getElementById("text");

function changeStyles() {
  
    // text.textContent = "sxva"
    // text.style.color = "red"
    // text.style.fontSize = "26px"

    // text.classList.add("active")

    text1.classList.add("hide");
}


function removeStyles() {
    text1.classList.remove("hide");
}

function toggleStyles() {
    text1.classList.toggle("hide");

    if (text1.classList.contains("hide")) {
        text2.textContent = "დამალულია"
    } else {
        text2.textContent = "ჩანს"
    }

}