const express = require('express')
const db = require('./utils/database')
const app = express()
const initModels = require('./models/initModels')

const PORT = 8000

//testing conexion with db

db.authenticate()
  .then(() => console.log(`Autorized`))
  .catch((error) => console.log(error))

initModels()

db.sync()
  .then(() => console.log('db sync'))
  .catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the server',
  })
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
