const express = require('express')
const app = express()
var path = require('path')

app.use(express.static(__dirname + '/Script'));
app.use(express.static(__dirname + '/View'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});