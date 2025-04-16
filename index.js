const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('App is working'))
app.use(routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})