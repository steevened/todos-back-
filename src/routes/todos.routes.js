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
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/todos', authMiddleware, getAllTodos)
router.get('/todos/:id', authMiddleware, getTodoById)
router.get('/todos/:id/categories', authMiddleware, getTodoWithCategory)
router.post('/todos', authMiddleware, createTodo)
router.put('/todos/:id', authMiddleware, updateTodo)
router.delete('/todos/:id', authMiddleware, deleteTodo)

module.exports = router
