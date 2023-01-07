const db = require('../utils/database')
const Users = require('../models/users.models')
const Todos = require('../models/todos.models')
const Categories = require('../models/categories.models')

const users = [
  { usermane: 'Jhorman', email: 'jhor@man.com', password: '1234' },
  { usermane: 'Lucero', email: 'luce@ro.com', password: '2435' },
  { usermane: 'Peter', email: 'pe@ter.com', password: '5343' },
  { usermane: 'Ian', email: 'I@an.com', password: '145334' },
]

const todos = [
  { title: 'task 1', description: 'description for 1', userId: 1 },
  { title: 'task 2', description: 'description for 2', userId: 2 },
  { title: 'task 3', description: 'description for 3', userId: 3 },
  { title: 'task 4', description: 'description for 4', userId: 4 },
]

const categories = [
  { name: 'category 1' },
  { name: 'category 2' },
  { name: 'category 3' },
  { name: 'category 4' },
  { name: 'category 5' },
  { name: 'category 6' },
]

const todosCategories = []

//create
//findOne, findAll, findById
//update
//destroy

db.sync({ force: true })
  .then(() => {
    console.log(`initializyng the seed`)
    users.forEach((user) => Users.create(user))
    setTimeout(() => {
      todos.forEach((todo) => {
        Todos.create(todo)
      })
    }, 100)
  })
  .catch((error) => console.log(error))
