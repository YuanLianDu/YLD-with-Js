/**
 * Created by yuan on 16/11/4.
 */

function route(handel, pathname, response,request) {
    console.log("About to route a request for" + pathname);

    if (typeof handel[pathname] === 'function') {
        handel[pathname](response,request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;