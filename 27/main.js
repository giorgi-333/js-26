
// navigator.onLine // აბრუნებს ბრაუზერი არის თუ არა ინტერნეტთან კავშირში

// console.log(navigator.onLine)

// navigator.userAgent // აბრუნებს ბრაუზერს

// console.log(navigator.userAgent);


// screen.width / screen.height // ეკრანის სიგანე და სიმაღლე

// console.log(screen.width, screen.height);


// history.back() // ბრაუზერში back ფუნქცია

// history.forward() // ბრაუზერში forward ფუნქცია

// location.href // სხვა მისამართზე გადასვლა

// location.href = "https://www.google.com/search?q=goog&oq=goog&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDINCAIQABiDARixAxiABDIKCAMQABixAxiABDIGCAQQRRhBMgYIBRBFGDwyBggGEEUYQTIGCAcQBRhA0gEHODYzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"

// location.hostname // აბრუნებს დომეინს (მაგ. google.com)

// console.log(location.hostname);

// location.search //  აბრუნებს query პარამეტრებს ( ?-ის შემდეგ დაწერილ ტექსტს ).

// console.log(location.search);

const params = new URLSearchParams(location.search);

console.log(params.get('saxeli'), params.get('id')); 


// location.reload() // რეფრეში


function refTest() {
    location.reload()
}

