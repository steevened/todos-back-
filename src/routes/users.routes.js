const { Router } = require('express')
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/Users.controller')
const router = Router()

//localhost:8000/users
//controller
router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)
module.exports = router
