const express = require('express')
const db = require('./utils/database')
const app = express()
const initModels = require('./models/initModels')
const userRoutes = require('./routes/users.routes')
const todoRoutes = require('./routes/todos.routes')
const categoryRoutes = require('./routes/categories.routes')
const authRoutes = require('./routes/auth.routes')
require('dotenv').config()

app.use(express.json())

const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT

//testing conexion with db

db.authenticate()
  .then(() => console.log(`Authorized`))
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

//todos endpoints-------------------------------------------------------------------

app.use('/api/v1', userRoutes)
app.use('/api/v1', todoRoutes)
app.use('/api/v1', categoryRoutes)
app.use('/api/v1', authRoutes)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
