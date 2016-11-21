var express = require('express');

var app = express();

app.get('/',function(request,response) {
    response.send('Hello World');
});

app.listen(1234,function() {
    console.log('app is listening at port 1234');
});