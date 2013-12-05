/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

/*jslint nomen:true, node:true */

"use strict";

module.exports = {
    photos: require('./photos'),
    places: require('./places'),

    index: function (req, res, next) {
        res.render('index-page', {located: false});
    }
};
