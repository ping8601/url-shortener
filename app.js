// require modules and packges
const express = require('express')
const exphbs = require('express-handlebars')

require('./config/mongoose')
const routes = require('./routes')

const app = express()
const port = 3000

// set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// use body-parser to refine all request
app.use(express.urlencoded({ extended: true }))

// set routes
app.use(routes)

app.listen(port, () => [
  `Express is listening on http://localhost:${port}...`
])