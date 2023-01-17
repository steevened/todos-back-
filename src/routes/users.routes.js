const { Router } = require('express')
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  getUserWithTodos,
  getWithCategories,
} = require('../controllers/Users.controller')
const router = Router()
const authMiddleware = require('../middlewares/auth.middleware')

//localhost:8000/users
//controller
router.get('/users', authMiddleware, getAllUsers)

router.get('/users/:id', authMiddleware, getUserById)

//get a user with their todos

router.get('/users/:id/todos', authMiddleware, getUserWithTodos)

router.get('/users/:id/categories', authMiddleware, getWithCategories)

router.post('/users', createUser)

router.put('/users/:id', authMiddleware, updateUser)

router.delete('/users/:id', authMiddleware, deleteUser)
module.exports = router
