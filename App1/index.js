require('dotenv').config()


const express = require('express')
    // the requires statement is like importing the express for once

const app = express()

// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send('Twitter Please login')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at chai and code')
})

app.get('/youtube', () => {
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})