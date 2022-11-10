/*
    Erőforrás:
        Product {
            id: string
            name: string
            price: number
            isInStock: boolean
        }
    Operációk:
        Create, Read, Update, Delete (CRUD)
*/

const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.send('GET /products');
});

app.get('/products:egyediAzonosito', (req, res) => {
    res.send('GET /products/id');
});

app.post('/products', (req, res) => {
    res.send('POST /products');
});

app.put('/products/:egyediAzonosito', (req, res) => {
    res.send('PUT /products/id')
})

app.delete('/products/:egyediAzonosito', (req, res) => {
    res.send('DELETE /products/id')
})


//TODO: 6:00