import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.get('/jokes', (req, res) => {
    const jokes = [{
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A second joke',
            content: 'This is second a joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is third a joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is fourth a joke'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://locahost:${port}`);
})