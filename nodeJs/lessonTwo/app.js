/**
 * Created by yuan on 16/11/10.
 */

var express = require('express');
var utility = require('utility');

var app = new express();

app.get('/',function(req,res) {
    var q = req.query.q;
    var md5Value = utility.md5(q);
    res.send(md5Value);
});

app.listen(1234,function (req,res) {
   console.log('port is 1234');
});