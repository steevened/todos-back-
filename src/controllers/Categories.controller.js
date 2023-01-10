const CategoryService = require('../services/categories.services')

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoryService.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getCategoryById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await CategoryService.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createCategory = async (req, res) => {
  const body = req.body
  try {
    const result = await CategoryService.create(body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const updateCategory = async (req, res) => {
  const { id } = req.params
  const field = req.body
  try {
    const result = CategoryService.update(id, field)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params
  try {
    const result = await CategoryService.delete(id)
    res.status(200).end()
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
}
