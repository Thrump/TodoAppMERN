const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

// routes
const todos = require('./components/todo/TodoAPI')

const app = express()

connectDB()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())
app.use('/todos', todos)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}`))