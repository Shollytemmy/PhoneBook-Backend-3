const express = require('express');
const app = express()
const  PORT = 30001


app.get("/", (req, res) => {

    res.status(200).send("<h1>Hello BackEnd</h1>")

})

app.listen(PORT, () => {

    console.log(`The App is listen to port ${PORT}`)
})