const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
  // * This name should be same as the one under "services" in docker-compose.yml
  host: 'redis-server',
  // Default redis port
  port: 6379
})

// Initialize
const VISITS_KEY = 'visits'
client.set(VISITS_KEY, 0)

app.get('/', (req, res) => {
  client.get(VISITS_KEY, (err, visits) => {
    res.send(`Number of visits is ${visits}`)
    client.set(VISITS_KEY, parseInt(visits) + 1)
  })
})

const PORT = 8081
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))