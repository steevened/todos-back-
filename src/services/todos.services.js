const todos = require('../models/todos.models')

class TodoService {
  static async getAll() {
    try {
      const result = await todos.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await todos.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(body) {
    try {
      const result = await todos.create(body)
      return result
    } catch (error) {
      throw error
    }
  }

  static async update(id, field) {
    try {
      const result = await todos.update(field, {
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async destroy(id) {
    try {
      const result = await todos.destroy({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = TodoService
