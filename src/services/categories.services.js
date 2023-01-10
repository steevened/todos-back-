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
}

module.exports = CategoryService
