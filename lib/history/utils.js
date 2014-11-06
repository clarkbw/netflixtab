/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

const { URL } = require('sdk/url');
const { merge } = require("sdk/util/object");

exports.normalize = function normalize(url, history) {
  history = history || {};
  let { hostname, scheme } = URL(url);
  return merge(history, { "hostname" : hostname, "scheme" : scheme, "favicon" : "" });
};
