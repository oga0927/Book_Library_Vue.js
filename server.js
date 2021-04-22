const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
//we are configuring dist to serve site files
app.use('/', serveStatic(path.join(__dirname, '/dist')))
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
 res.sendFile(path.join(__dirname, '/dist/index.html'))
})
const port = process.env.PORT || 8080
app.listen(port)
console.log(`site is listening on port: ${port}`)
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);