const express = require('express')

const app = express()
const Port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(Port, () => {
    console.log(`Server running at the server ${Port}`);
})