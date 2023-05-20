const express = require('express')
const cors = require('cors')
const {sequelize} = require('./src/db')

const app = express()

app.use(express.json())
app.use(cors())

