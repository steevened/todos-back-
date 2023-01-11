const UserService = require('../services/user.services')

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await UserService.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserWithTodos = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserService.getWithTodos(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getAllUsersWithTodos = async (req, res) => {
  try {
    const result = await UserService.getAllUsersWithTodos()
    res.json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createUser = async (req, res) => {
  try {
    const body = req.body
    const result = await UserService.create(body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const updateUser = async (req, res) => {
  const id = req.params.id
  const field = req.body
  try {
    const result = await UserService.update(id, field)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const result = await UserService.delete(idPeter)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithTodos,
  getAllUsersWithTodos,
  createUser,
  updateUser,
  deleteUser,
}
