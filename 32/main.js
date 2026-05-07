
const data = { password: '12345' };

fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: 'PUT', // განახლება მონაცემების
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data) 
});
    


fetch(`https://jsonplaceholder.typicode.com/posts/2`, {
      method: 'DELETE'
})
