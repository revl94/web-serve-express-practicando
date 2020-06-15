const hbs = require('hbs');

// Helpers, se dispara cuando se requiere

hbs.registerHelper('getAnho', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' '); // Generamos un erreglo separados por espacios
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});

// Los helper no llevan exports