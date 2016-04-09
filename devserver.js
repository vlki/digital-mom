#!/usr/bin/env node
'use strict';

var express = require('express');
//var bodyParser = require('body-parser');
var proxyMiddleware = require('http-proxy-middleware');

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

// Proxy API calls to the remote dev server
app.use(proxyMiddleware(['/api'], {
    target: 'http://tunnel.ki-wi.cz:4321',
    changeOrigin: true,
    logLevel: 'warn',
    onProxyRes: function(proxyRes, req, res) {
        // remove httonly in set-cookie header
        if (proxyRes.headers['set-cookie'] && proxyRes.headers['set-cookie'].length === 1) {
            var setCookieSplit = proxyRes.headers['set-cookie'][0].split('; ');

            if (setCookieSplit.length === 4) {
                proxyRes.headers['set-cookie'] = [ setCookieSplit[0] + '; ' + setCookieSplit[1] + '; ' + setCookieSplit[2] ];
            }
        }
    }
}));

// Any non-matched by static deep link calls should return index.html
app.use('/*', express.static('./index.html'));

app.listen(port, function() {
    console.log('Express server started');
    console.log('Open in browser -> http://localhost:' + port);
});
