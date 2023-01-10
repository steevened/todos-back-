const { Router } = require('express')
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/Categories.controller')

const router = Router()

router.get('/categories', getAllCategories)
router.get('/categories/:id', getCategoryById)
router.post('/categories/:id', createCategory)
router.put('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

module.exports = router
