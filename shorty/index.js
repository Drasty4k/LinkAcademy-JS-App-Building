const express = require('express')
const cors = require('cors')
const server = express()
const port = 8080

const idChars = 'abcdefghijklmnopqrstuvwxyz0123456789'
const idLength = 8


storage = []

function createShortUri(req, resp) {
    const longUri = req.body.longUri
    const id = generateId()
    storage[id] = longUri
    resp.send({
        shortUri: `http://localhost:${port}/short/${id}`
    })
}

function redirectToLongUri(req, resp) {
    const id = req.params.id
    longUri = storage[id]
    if (longUri === undefined) {
        resp.status(404).send()
        return
    }
    resp.redirect(301, longUri)
}

function generateId() {
    let id = ''
    for (let i=0; i<idLength; i++){
        let randomPosition = Math.floor(Math.random() * idChars.length)
        id = id + idChars[randomPosition]
    }
    return id
}


// inregistram middleware care sa parseze json
// inregistram middleware pentru cors
server.use(express.json())
server.use(cors())

// definim rutele 
// inregistram middleware pentru cors pentru prima ruta
server.post('/short', createShortUri)
server.get('/short/:id', redirectToLongUri)

server.listen(
    port,
    () => { console.log(`Listening on http://localhost:${port}`) })

