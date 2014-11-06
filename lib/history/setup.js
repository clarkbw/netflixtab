/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

const { merge } = require('sdk/util/object');
const { on } = require('sdk/event/core');
const { getFavicon } = require("sdk/places/favicon");
const { setTimeout } = require('sdk/timers');

const { Services } = require("resource://gre/modules/Services.jsm");

const { Metadata } = require('../metadata/events');
const { metaMerge } = require('../metadata/utils');
const { events } = require('../history/service');
const { search } = require('../history');

const { history } = require('../db');

// // every so often we try to update the favicons
// setInterval(() => {
//   history.query().filter({favicon: ""}).each((row, index) => {
//     getFavicon(row.url).then(favicon => {
//       history.query().filter({url: row.url}).update({ "favicon" : favicon });
//     }, console.log);
//   });
// }, 60 * 1000);

on(events, 'title:changed', data => {
  history.query().filter({url: data.url}).update({ title : data.title });
});

on(events, 'visit', data => {
  // history visits can be redirects and poor urls so they are cleaned up in the
  // setTimeout code
  // we also don't want search history shown as that is dealt with separately
  let parsed = Services.search.parseSubmissionURL(data.url);
  console.log("VISIT", parsed);
  if (parsed.engine == null) {
    history.insert(data);
    setTimeout( () => {
      // This is kind of gross but the VISIT event spews ugly redirects
      // A quick history query (limited to 10) allows us to clean up those URLs
      search({}).then((results) => {
        let urls = results.map((r) => r.url);
        history.query().filter({url__not_in: urls}).remove();
      }).then(() => {
        getFavicon(data.url).then(favicon => {
          history.query().filter({hostname: data.hostname}).update({ "favicon" : favicon });
        }, console.log);
      });
    }, 5 * 1000);
  }
});

on(events, 'delete', data => {
  history.query().filter({url: data.url}).remove();
});

on(Metadata, 'add', meta => {
  history.query().filter({url: meta.url}).update(metaMerge(meta));
});
