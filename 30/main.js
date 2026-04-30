

const data = { username: 'test', password: '123' };

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // ვუთითებთ POST მეთოდს
  headers: {
    'Content-Type': 'application/json' // ვუთითებთ რომ json მონაცემებს ვგზავნით
  },
  body: JSON.stringify(data) //  JS ობიექტის  JSON-ში გადაყვანა
})
  .then(response => {
    if (!response.ok) { // ვამოწმებთ ერორებს (მაგ. 404, 500)
      throw new Error(`დაფიქსირდა ერორი! status: ${response.status}`);
    }
    return response.json(); // დაბრუნებული შედეგის JSON-ში გადაყვანა
  })
  .then(result => console.log('შედეგი:', result))
  .catch(error => console.error('Error:', error))