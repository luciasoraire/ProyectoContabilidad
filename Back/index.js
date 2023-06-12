const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./src/routes/index')
const {sequelize} = require('./src/db')


const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/contabilidad', router)
sequelize.sync({alter: true}).then(() => {
    app.listen(3001, () => {
        console.log('server on port 3001');
    })
})

