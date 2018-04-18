//nodemon server.js

var express = require('express'),
    app = express();

app.use('/', express.static(__dirname + '/'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var port = 5000;
var host = 'localhost';

app.listen(port, host, function () {
    console.log('Express server listening on port ' + host+':'+port);
});
