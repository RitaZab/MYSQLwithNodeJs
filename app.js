//Here will be stored all code with express

import express from "express";
import {getAllValues,getSingleValue,addingValue} from './database.js'
const app = express()

app.use(express.json())

//These lines are normal error handling with is standard for express 5 beta
app.use((err, req, res, next)=> {
    console.log(err.stack)
    res.status(500).send('There is a problem -something broke!')
})

app.listen(8001, () => {
    console.log('Server is running on port 8001')
})
//Getting all animals on HTTP
app.get('/animals', async (req, res) => {
    const list=await getAllValues()
    res.send(list)
})
//Getting animal with specific id
app.get('/animals/:id', async (req, res) => {
    const id = req.params.id
    const value = await getSingleValue(id)
    res.send(value)
})

//Adding new value
app.post('/animals', async (req, res) => {
    const { animal_name, species } = req.body
    const newValue = await addingValue(animal_name, species)
    res.status(201).send(newValue)
})