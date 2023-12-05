"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = http_1.default.createServer(function (req, res) {
    res.write('Hello, World!');
    res.end();
});
var test_port = 3000;
var domain = 'webska.net';
server.listen(domain, function () {
    console.log("Server is running at http://localhost:".concat(domain));
});
