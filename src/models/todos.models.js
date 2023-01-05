const db = require('../utils/database')
const { DataTypes, BOOLEAN } = require('sequelize')

const Todos = db.define('Todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  is_complete: {
    type: BOOLEAN,
    defaultValue: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
module.exports = Todos
