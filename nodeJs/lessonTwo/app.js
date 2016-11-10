/**
 * Created by yuan on 16/11/10.
 */

var express = require('express');
var utility = require('utility');

var app = new express();

app.get('/',function(req,res) {
    var q = req.query.q;
    var md5Value = utility.md5(q);
    var sha1Value = utility.sha1(q,'base64');
    var result = {
        'md5Value': md5Value,
        'sha1Value': sha1Value

    };
    res.send(result);
});

app.listen(1234,function (req,res) {
   console.log('port is 1234');
});