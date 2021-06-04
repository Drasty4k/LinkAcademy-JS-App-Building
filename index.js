const express = require('express')
const app = express()
const port = 8081

function random(min, max){
    console.log(`min = ${min}`, `max = ${max}`)
    return {
        number: Math.floor(Math.random() * (+max + 1 - +min)) + +min
    }
}

// /random?min={x}&max={y}
app.get('/random', (request, response) => {
    response.send(random(request.query.min, request.query.max))
})


app.listen(
    port,
    () => { console.log(`Listening on http://localhost:${port}`) }
)