var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var app = express()

var data = require('./data')

app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/assignments', function (req, res) {
  knex('wombles')
    .join('rubbish', 'wombles.rubbish_id', '=', 'rubbish.rubbish_id')
    .select('wombles.name', 'rubbish.name as rubbish')
    .then(function (data) {
      res.send(data)
    })
    .catch(function (err) {
      console.error(err.message)
      res.status(500).send("Couldn't show you the wombles!")
    })
})

app.get('/view', function (req, res) {
  knex('wombles')
    .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
    .select('wombles.name', 'characteristics.description')
    .then(function (dat) {
      res.send(dat)
    })
    .catch(function (err) {
      console.error(err.message)
      res.status(500).send("Couldn't show you the wombles!")
    })
})

app.get('/', function (req, res) {
  knex('wombles')
  .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
  .select('wombles.name')
  .then(function (dat) {
    console.log(dat[0].name);
    res.render('home', dat[0])
  })
  .catch(function (err) {
    console.error(err.message)
    res.status(500).send("Couldn't show you the wombles!")
  })
  // res.render('home',data.home )
})

var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})
