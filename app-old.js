const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' }); // Manda un json


        let salida = {
            nombre: 'ramon',
            edad: 25,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola mundo');
        res.end(); // Indica cuando termina de crear una respuesta
    })
    .listen(8080);
console.log('Escuchando puerto 8080');