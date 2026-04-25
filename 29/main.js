

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

let resultDiv = document.querySelector("#resultDiv")

fetch('https://jsonplaceholder.typicode.com/posts/6')
    .then(resp => resp.json() )
    .then(res => {
        resultDiv.innerHTML = `<h1>${res.title}</h1> <div> ${res.body} </div>`
    })
