const express = require('express')

const app = express()

app.get('/ping', (_req, res) => {
  res.status(200).json({
    message: 'Ping successful',
    status: 'ping_success'
  })

  return
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
