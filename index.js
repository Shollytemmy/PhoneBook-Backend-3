const express = require('express');
const app = express()
const  PORT = 3001

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get("/", (req, res) => {

    res.status(200).send("<h1>Hello BackEnd</h1>")

})

app.get("/api/persons", (req, res) => {

    res.json(persons)
})

app.get("/info", (req, res) => {
    res.status(200).send(`<p>The phonebook has info for ${persons.length} people </p> <br /> ${new Date().toUTCString()}`)
    res.send(``)
})

app.get("/api/persons/:id", (req, res) => {
    const {id} = req.params
    

    const getPerson = persons.find((person) => person.id === Number(id))
    if(!getPerson){
        return res.status(404).json({
            message: "Not Found",
            status: 404
        })
    }
   res.json(getPerson)
})

app.listen(PORT, () => {

    console.log(`The App is listen to port ${PORT}`)
})