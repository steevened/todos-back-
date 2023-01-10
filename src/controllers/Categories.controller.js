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
  try {
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createCategory = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const updateCategory = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const deleteCategory = async (req, res) => {
  try {
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
