var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
// app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,"client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build","client", "index.html"));
});

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)
