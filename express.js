const express = require('express')
const path = require('path')
const app = express()

// console.log(__dirname)
// console.log(path.join(__dirname, './web-page'))

const public = path.join(__dirname, './web-page')

app.use(express.static(public))

// app.get('/help', (req, res) => {
//   res.send({ name: 'meena', age: 34 })
// })

// app.get('/about', (req, res) => {
//   res.send('about us we like')
// })
// app.get('/weather', (req, res) => {
//   res.send('we are suffring badly')
// })

app.listen(3000, () => {
  console.log('i have started the 3000')
})
