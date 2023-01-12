const users = require('../models/users.models')
const Todos = require('../models/todos.models')
const TodosCategories = require('../models/todos-categories.models')
const Categories = require('../models/categories.models')

class UserService {
  static async getAll() {
    try {
      const result = await users.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await users.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getWithTodos(id) {
    try {
      const result = await users.findOne({
        where: { id },
        attributes: {
          exclude: ['password'],
        },
        include: {
          model: Todos,
          // attributes: ['title'],
          as: 'task',
          include: {
            model: TodosCategories,
            as: 'categories',
            include: {
              model: Categories,
              as: 'category',
            },
          },
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getWithCategories(id) {
    try {
      const result = await users.findOne({
        where: { id },
        include: {
          model: Categories,
          as: 'category',
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(body) {
    try {
      const result = await users.create(body)
      return result
    } catch (error) {
      throw error
    }
  }

  static async update(id, field) {
    try {
      const result = await users.update(field, {
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async delete(id) {
    try {
      const result = await users.destroy({
        where: { id },
      })
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService
