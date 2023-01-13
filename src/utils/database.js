const { Sequelize } = require('sequelize')

//create an instance with setting parameters from our db
//setting object
const db = new Sequelize({
  database: 'todoappwith',
  username: 'alvarado',
  host: 'localhost',
  port: '5432',
  password: 'root',
  dialect: 'postgres',
  logging: false,
})

module.exports = db
