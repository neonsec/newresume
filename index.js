var express = require('express')
var app = express()
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send(__dirname+'/public/index.html');
})

app.listen(5000)
