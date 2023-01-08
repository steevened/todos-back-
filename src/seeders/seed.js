const db = require('../utils/database')
const Users = require('../models/users.models')
const Todos = require('../models/todos.models')
const Categories = require('../models/categories.models')
const TodosCategories = require('../models/todos-categories.models')
const initModels = require('../models/initModels')

initModels()

const users = [
  { usermane: 'Jhorman', email: 'jhor@man.com', password: '1234' },
  { usermane: 'Lucero', email: 'luce@ro.com', password: '2435' },
  { usermane: 'Peter', email: 'pe@ter.com', password: '5343' },
  { usermane: 'Ian', email: 'I@an.com', password: '145334' },
]

const todos = [
  { title: 'make de dinner', description: 'one per day', userId: 1 },
  { title: 'do your homeworks', description: 'for the university', userId: 2 },
  { title: 'give classes', description: 'on nights', userId: 3 },
]

const categories = [
  { name: 'education' },
  { name: 'home' },
  { name: 'work' },
  { name: 'hobbies' },
  { name: 'healt' },
  { name: 'personal' },
]

const todosCategories = [
  { todoId: 1, categoryId: 2 },
  { todoId: 1, categoryId: 5 },
  { todoId: 2, categoryId: 1 },
  { todoId: 2, categoryId: 4 },
  { todoId: 2, categoryId: 6 },
  { todoId: 3, categoryId: 3 },
  { todoId: 3, categoryId: 6 },
]

//create
//findOne, findAll, findById
//update
//destroy

db.sync({ force: true })
  .then(() => {
    console.log(`initializing the seed`)
    users.forEach((user) => Users.create(user))
    setTimeout(() => {
      todos.forEach((todo) => {
        Todos.create(todo)
      })
    }, 100)
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category))
    }, 200)
    setTimeout(() => {
      todosCategories.forEach((todosCategory) => {
        TodosCategories.create(todosCategory)
      })
    }, 300)
  })
  .catch((error) => console.log(error))
