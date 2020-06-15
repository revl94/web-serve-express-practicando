const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // Especifica que sera estatico (publico)

hbs.registerPartials(__dirname + '/views/partials'); // dirname toma el path sea cual sea y concatenale la ruta dada

// Express engine hbs para renderizar las vistas
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola mundo');


    res.render('home', {
        nombre: 'ramon'
    });

});

app.get('/about', (req, res) => {
    // res.send('Hola mundo');


    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${ port }`);
});