const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

//Define the model for a Todo 
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    updated_Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Todo = mongoose.model('todo', TodoSchema)