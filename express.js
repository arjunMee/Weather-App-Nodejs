const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(__filename)

const app = express()
const public = path.join(__dirname, './web-page/src')

app.get('', (req, res) => {
  res.redner('index')
})
app.set('view engine', 'hbs')

app.use(express.static(public))

app.listen(3000, () => {
  console.log('hello boi im runnuing')
})
