/**
 * Created by yuan on 16/11/4.
 */

var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);