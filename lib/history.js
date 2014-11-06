/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
'use strict';

const { defer } = require('sdk/core/promise');
const { search } = require('sdk/places/history');
const { merge } = require("sdk/util/object");
const { newURI } = require('sdk/url/utils');

const { normalize } = require('./history/utils');

const { PlacesUtils: {
  history: hstsrv
} } = require("resource://gre/modules/PlacesUtils.jsm");

function remove(url) {
  hstsrv.removePage(newURI(url));
}
exports.remove = remove;

function searchHistory(options) {
  options = validateOptions(options);
  let { resolve, reject, promise } = defer();


  search([options], {
    count: 10,
    sort: "date",
    descending: true
  }).on("end", results => {
    // filter out the title == null results because the redirect filtering doesn't work
    results = results.filter(item => item.title !== null).map(result => normalize(result.url, result));
    if (results.length > 0) {
      resolve(results);
    } else {
      reject(results);
    }
  });

  return promise;
}
exports.search = searchHistory;

function validateOptions(options) {
  // query, url, from, to
  // from : yesterday
  // to: today
  options = merge({ redirectsMode : 2, from : Date.now() - (1000 * 60 * 60 * 24), to : Date.now() }, options);

  return options;
}
