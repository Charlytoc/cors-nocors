const express = require('express');

const app = express();

app.get('/disabled', (request, response)=> {
    response.send('DISABLEd')
})
app.get('/enabled', (request, response)=> {
    response.header('Access-Control-Allow-Origin', '*')
    response.json({message: "I have the CORS enabled"})
})

app.listen(3001, () => {
    console.log('Servidor de Express funcionando en el puerto 3001');
  });