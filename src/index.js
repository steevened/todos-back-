const express = require('express')
const db = require('./utils/database')
const app = express()
const initModels = require('./models/initModels')
const Users = require('./models/users.models')

app.use(express.json())

const PORT = 8000

//testing conexion with db

db.authenticate()
  .then(() => console.log(`Autorized`))
  .catch((error) => console.log(error))

initModels()

db.sync({ force: false })
  .then(() => console.log('db sync ok'))
  .catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the server',
  })
})

app.get('/users', async (req, res) => {
  try {
    //get the result from the users database
    const result = await Users.findAll()
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

//get a user

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Users.findByPk(id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.get('/users/username/:username', async (req, res) => {
  try {
    const { username } = req.params
    const result = await Users.findOne({ where: { usermane: username } })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.post('/users', async (req, res) => {
  try {
    const user = req.body
    const result = await Users.create(user)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
})
//change the passwqord
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await Users.update(field, {
      where: { id },
    })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Users.destroy({
      where: { id },
    })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
