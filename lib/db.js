/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

const DataCollection = require('data-collection');

exports.searches = new DataCollection().defineIndex('url');
exports.history = new DataCollection().defineIndex('url');
exports.tiles = new DataCollection().defineIndex('url');
