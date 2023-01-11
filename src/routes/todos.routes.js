const { Router } = require('express')
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoWithCategory,
} = require('../controllers/Todos.controller')

const router = Router()

router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodoById)
router.get('/todos/:id/categories', getTodoWithCategory)
router.post('/todos', createTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router
