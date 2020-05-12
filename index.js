const express = require("express")

const app = express()

app.use('/',express.static('frontend'))  

app.get('/proiect',(request, response)=>{
    response.status(200).json({proiect:"cloud"})   
})

app.get('/proiect1',(request, response)=>{
    response.status(403)   
})


app.listen(8080)
