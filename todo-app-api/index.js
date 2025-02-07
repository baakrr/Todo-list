// import project
const express = require('express')
const dotenv = require('dotenv')

// load .env
dotenv.config()

// inisiasi project
const app = express()

// middleware
// agar bisa consume JSON
app.use(express.json())

// routing
app.get('/', (request, response) => response.status(200).json({ "msg": "its run" }))

// port default
const port = process.env.PORT || 3001

// Jalankan server
app.listen(port, () => console.log(`server running! -> ${port}`))