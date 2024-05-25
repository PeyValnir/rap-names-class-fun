const express = require('express')
const app = express()
const port = 8000

const rappers = {
   '21 savage': {
    'age' : 29, 
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation':'London, England'   
}, 
    'chance the rapper': {
    'age' : 29, 
    'birthName': 'Chancelor Johnathan Bennett',
    'birthLocation':'Chicago, Illinois'   
}, 
    'dylan': {
    'age' : 29, 
    'birthName': 'Dylan',
    'birthLocation':'Dylandia' 
}
}
//========================
//HANDLERS
//========================
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    console.log(`Received request for: ${rappersName}`)
    if(rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
    // response.json(rappers)
})

//========================
//START SERVER
//========================

app.listen(port, () => {
    console.log(`The server is running on ${port} you better go catch it!`)
} )
