require('./database')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

//Settings
app.set('port', process.env.PORT || 3003)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(require('./routes/routes'))

app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`)

})