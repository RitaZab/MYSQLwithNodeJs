//Here will be stored all code with express

import express from "express";
import {getAllValues,getSingleValue,addingValue} from './database.js'
const app = express()

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