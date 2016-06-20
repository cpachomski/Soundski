var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('dist'));

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'))
});

app.listen(3000);
console.log('Serving up something hot at localhost:3000')
