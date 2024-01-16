const express = require('express')

const app = express()

app.get('/ping', (_req, res) => {
  res.status(200).json({
    message: 'Health-check successful'
  })

  return
})

app.listen(8080, () => {
  console.log('Listening on port 8080..')
})
