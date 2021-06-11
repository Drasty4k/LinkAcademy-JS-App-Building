const express = require('express')
const server = express()
const port = 8080

storage = []

function createShortUri(req, resp) {

}

function redirectToLongUri(req, resp) {
    const longUri = req.body.longUri
    const id = generateId()
    storage[id] = longUri
    resp.send({
        shortUri: `http://localhost:${port}/short/${id}`
    })
}

function generateId() {
    return Math.floor(Math.random() * 100000) + 10000
}

// inregistram middleware care sa parseze json
server.use(express.json())

// definim rutele 
server.post('/short', createShortUri)
server.get('/short/:id', redirectToLongUri)

server.listen(
    port,
    () => { console.log(`Listening on http://localhost:${port}`) })

