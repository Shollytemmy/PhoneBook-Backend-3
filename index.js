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

app.use(express.json())


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


app.delete("/api/persons/:id", (req, res) => {
  const {id} = req.params

  persons = persons.filter((person) => person.id !== Number(id))

  res.status(204).send()

})

const getMaxId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map((person) => person.id) ) : 0

  return maxId + 1
}



app.post("/api/persons", (req, res) => {

  // console.log(req.body)

  const body = req.body

  if(!body.name || !body.number){
    return res.status(404).json({
      message: "Not Found",
      status: 404
    })

  }

  if(persons.find((person) => person.name === body.name)){
    return res.status(409).json({
      error: "Name already exists"
    })
  }

  

  const contacts = {
    name: body.name,
    number: body.number,
    id: getMaxId()
  }

  persons = persons.concat(contacts)

  res.json(persons)

  // const id = Number(req.params.id)


 



})

app.listen(PORT, () => {

    console.log(`The App is listen to port ${PORT}`)
})


/**
 *  findContact  = persons.find((person) =>  person.name === body.name)
  if(findContact.name === body.name){
    return  res.status(404).json({
      error: "Name Already Exists"
    })
  }
 */