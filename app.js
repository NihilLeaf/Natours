const express = require('express')

const app = express()

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({message: 'Hello from the server', app: 'Natours'})
})

const PORT = 3000
app.listen(PORT, () => {
  console.log('App running')
})