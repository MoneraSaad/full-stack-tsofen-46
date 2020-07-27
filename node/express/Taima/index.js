const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/about', function (req, res) {
  res.send('about me')
});

app.get('/students/:studentID/:name?', function (req, res) {
  const { studentID, name } = req.params
  console.log(studentID, name)
  res.send(`about the student with id: ${studentID} with name of ${name}`)
})

// app.get('/students/:studentID', function (req, res) {
//   const { studentID } = req.params
//   res.send(`about the student with id: ${studentID}`)
// })




app.get('/admin', function (req, res) {
  res.send('admin panel')
})

app.listen(3000, () => { console.log('App listen on port 3000') })