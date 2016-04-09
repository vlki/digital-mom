#!/usr/bin/env node
'use strict';

var express = require('express');
//var bodyParser = require('body-parser');
//var proxyMiddleware = require('http-proxy-middleware');

var app = express();
var port = process.env.PORT || 8001

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(express.static('./'));

// Any invalid calls for templateUrls are under app/* and should return 404
// app.use('/includes/*', function(req, res, next) {
//     var data = {
//         status: 404,
//         message: 'Not Found',
//         description: description,
//         url: req.url
//     };
//     res.status(404)
//         .send(data)
//         .end();
// });

// // Proxy API calls to the remote dev server
// app.use(proxyMiddleware(['/web', '/server'], {
//     target: 'http://104.155.59.182/maven',
//     changeOrigin: true,
//     logLevel: 'warn'
// }));

// Any non-matched by static deep link calls should return index.html
app.use('/*', express.static('./index.html'));

app.listen(port, function() {
    console.log('Express server started');
    console.log('Open in browser -> http://localhost:' + port);
});
