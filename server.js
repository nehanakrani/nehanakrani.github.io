var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
// app.use(serveStatic(path.join(__dirname, 'dist')))

app.get("*", (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)
