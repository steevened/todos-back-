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

//localhost:8000/users
//controller
router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

//get a user with their todos

router.get('/users/:id/todos', getUserWithTodos)

router.get('/users/:id/categories', getWithCategories)

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)
module.exports = router
