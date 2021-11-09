const express = require('express')
const app = express()
// O Heroku vai definir a variavel de ambiente PORT
// Caso o ambiente seja fora do heroku usa a porta 5000
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/endpoint-10', (req, res) => {
  res.send('endpoint-10 OK')
})

app.listen(PORT, () => {
  console.log("App listening at localhost:" + PORT
  )
})