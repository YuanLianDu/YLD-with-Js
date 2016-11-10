var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = new express();

app.get('/',function (req,res,next) {

    superagent.get('https://cnodejs.org/').end(function (err,superRes) {

        if(err) { next(err);}

        /*console.log(superRes.type);
        console.log(superRes.body);
        console.log(superRes.header);
        console.log(superRes.text);*/
        var $ = cheerio.load(superRes.text);
        var items = [];

        $('#topic_list .topic_title').each(function (index,element) {
            var $element = $(element);
            // console.log($element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href'),

            });
        });

        $('.count_of_replies').each(function (index,element) {
            var $element = $(element);
            items[index]['count_of_replies'] = $element.text().replace(/(\n)/g, "");
        });

        $('.count_of_visits').each(function (index,element) {
            var $element = $(element);
            items[index]['count_of_visits'] = $element.text().replace(/(\n)/g, "");
        });

        res.send(items);
    });
});

app.listen(1234,function (req,res) {
    console.log('port is 1234');
});