const express = require('express')
const path = require('path'), serveStatic = require('serve-static')
const app = express()

app.use('/shop', serveStatic(path.join(__dirname, 'views')))

app.get('/', function (req, res){
    res.redirect('/shop')
})

app.listen(80, function () {
    console.log('A.shopping server is open(port: 80) http://anhye0n.me')
})
