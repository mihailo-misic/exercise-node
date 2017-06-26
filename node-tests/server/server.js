const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app 1.0'
    })
});

app.get('/users', (req, res) => {
    res.send([
        {name: 'Mihailo', age: 23},
        {name: 'Marko', age: 22},
        {name: 'Nikola', age: 21},
    ])
});

app.listen(3000);
module.exports.app = app;