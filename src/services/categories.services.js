const categories = require('../models/categories.models')

class CategoryService {
  static async getAll() {
    try {
      const result = await categories.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await categories.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(body) {
    try {
      const result = await categories.create(body)
      return result
    } catch (error) {
      throw error
    }
  }

  static async update(id, field) {
    try {
      const result = await categories.update(field, {
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async delete(id) {
    try {
      const result = await categories.destroy({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CategoryService
