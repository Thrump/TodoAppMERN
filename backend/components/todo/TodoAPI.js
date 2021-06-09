const express = require('express')
const router = express.Router()

// Load Todo model
const Todo = require('../todo/Todo')

// testing route
router.get('/test', (req, res) => res.send('book router testing!'))


// @route GET /todo
// @desc Get all todos
router.get('/', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({
            err: 'No Todos found'
        }))
})

// @route GET /todo/:id
// @desc Gets single todo by id
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json({
            err: 'No Todo found'
        }))
})

// @route POST /todo
// @desc Adds a new todo
router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(todo => res.json({ msg: 'Todo added successfully '}))
        .catch(err => res.status(400).json({err: 'Unable to add a todo'}))
})

// @route PUT /todo/:id
// @desc Updates a todo by id
router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(todo => res.json({ msg: 'Update sucessfully'}))
        .catch(err => {
            res.status(400).json({err: 'Unable to update todo'})
        })
})

// @route DELETE /todo/:id
// @desc Deletes a todo by id
router.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id, req.body)
        .then(todo => res.json({ msgs: 'Todo entry deleted successfully'}))
        .catch(err => res.status(404).json({ err: 'Unable to delete todo'}))
})

module.exports = router