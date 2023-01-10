const TodoService = require('../services/todos.services')

const getAllTodos = async (req, res) => {
  try {
    const result = await TodoService.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getTodoById = async (req, res) => {
  const id = req.params.id
  try {
    const result = await TodoService.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const createTodo = async (req, res) => {
  const body = req.body
  try {
    const result = await TodoService.create(body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateTodo = async (req, res) => {
  const id = req.params.id
  const field = req.body
  try {
    const result = await TodoService.update(id, field)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteTodo = async (req, res) => {
  const id = req.params.id
  try {
    const result = await TodoService.destroy(id)
    res.status(200).end()
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
}
