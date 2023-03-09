
const http = require('http');

http.createServer((req, res) => {

    res.write('hola gato');
    res.end();
})

    .listen(8089); 

console.log('Escuchando el puerto', 8089);