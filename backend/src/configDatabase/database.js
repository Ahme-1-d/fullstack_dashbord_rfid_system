const Sequelize = require('sequelize')
const sequelize = new Sequelize('systeme_control_access', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '1234'
  });
  
  module.exports = sequelize;