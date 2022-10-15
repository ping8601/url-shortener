// require modules and packges
const express = require('express')
const exphbs = require('express-handlebars')

require('./config/mongoose')

const app = express()
const port = 3000

// set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => [
  `Express is listening on http://localhost:${port}...`
])