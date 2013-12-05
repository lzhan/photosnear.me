/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

/*jslint nomen:true, node:true */

"use strict";

var path = require('path'),
    Y    = require('yui/oop'),

    NODE_ENV = process.env.NODE_ENV,
    PORT     = process.env.PORT,

    appRoot = process.cwd(),
    config  = require('./config.json');

config.env  = NODE_ENV || 'development';
config.port = PORT || config.port;

Y.Object.each(config.dirs, function (dir, name, dirs) {
    dirs[name] = path.join(appRoot, dir);
});

module.exports = config;
