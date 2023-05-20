const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const sequelize = new Sequelize(`postgres://postgres:torresmariano2015@localhost:5432/contabilidad`,
    { logging: false, native: false })

module.exports = { sequelize }