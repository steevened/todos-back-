const { Sequelize } = require('sequelize')
require('dotenv').config()

//create an instance with setting parameters from our db
//setting object
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  logging: false,
})

module.exports = db
