/**
 * Created by yuan on 16/11/10.
 */

var express = require('express');
var utility = require('utility');

var app = new express();

app.get('/',function(req,res) {
    var q = req.query.q;
    if('' !== q){
        var md5Value = utility.md5(q);
        var sha1Value = utility.sha1(q,'base64');
        var result = {
            query: q,
            md5Value: md5Value,
            sha1Value: sha1Value

        };
        res.send(result);
    }else {
        res.send('please send query');
    }

});

app.listen(1234,function (req,res) {
   console.log('port is 1234');
});