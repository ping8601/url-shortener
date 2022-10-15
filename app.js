// require modules and packges
const express = require('express')

require('./config/mongoose')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('project initialized!')
})

app.listen(port, () => [
  `Express is listening on http://localhost:${port}...`
])