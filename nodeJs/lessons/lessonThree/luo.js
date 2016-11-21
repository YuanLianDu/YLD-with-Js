/**
 * Created by yuan on 16/11/11.
 */
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
    superagent('GET', 'https://cnodejs.org/')
        .then(function (sres) {
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .cell').each(function (idx, element) {
                var $element = $(element);

                items.push({
                    reply: $element.find('.count_of_replies').text(),
                    view: $element.find('.count_of_visits').text(),
                    title: $element.find('.topic_title').attr('title'),
                    href: $element.find('.topic_title').attr('href'),
                    authorLink: 'https://cnodejs.org' + $element.find('.topic_title').attr('href')
                });

            });

            return items;
        })
        .then(function(datas) {
            datas.length = 10; // 请求次数太多会被屏蔽
            var items = [];
            datas.map(function(data) {
                var d = new Promise((resolve, reject) => {
                    superagent('GET', data.authorLink)
                        .end(function(err, sres) {
                            if(err) {
                                console.log(err);
                                reject(err);
                                //return next(err);
                            }
                            else {
                                var _ = cheerio.load(sres.text);
                                var author = _('#content .changes').children('span').eq(1).find('a').text();
                                data.author = author;
                                resolve(data)
                            }
                        })
                })
                items.push(d);
            });
            Promise.all(items)
                .then(values => {
                    res.send(values);
                })
        })
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});