//lets import our models

const Users = require('./users.models')
const Todos = require('./todos.models')
const Categories = require('./categories.models')
const TodosCategories = require('./todos-categories.models')

const initModels = () => {
  Todos.belongsTo(Users, { as: 'author', foreignKey: 'user_id' })
  Users.hasMany(Todos, { as: 'task', foreignKey: 'user_id' })
  //
  TodosCategories.belongsTo(Todos, { as: 'tasks', foreignKey: 'todo_id' })
  Todos.hasMany(TodosCategories, { as: 'categories', foreignKey: 'todo_id' })
  //
  TodosCategories.belongsTo(Categories, {
    as: 'category',
    foreignKey: 'category_id',
  })
  Categories.hasMany(TodosCategories, { as: 'task', foreignKey: 'category_id' })
  //

  Users.hasMany(Categories, { as: 'category', foreignKey: 'user_id' })
  Categories.belongsTo(Users, { as: 'category', foreignKey: 'user_id' })
}

module.exports = initModels
