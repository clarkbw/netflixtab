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

const { Metadata } = require('../metadata/events');
const { metaMerge } = require('../metadata/utils');
const { events } = require('../history/service');
const { Services } = require("resource://gre/modules/Services.jsm");

const { searches } = require('../db');

on(events, 'visit', data => {
  let parsed = Services.search.parseSubmissionURL(data.url);
  if (parsed.engine !== null) {
    searches.insert(merge(data, { "terms" : parsed.terms, "title" : parsed.terms }));
    setTimeout( () => {
      // we want the favicon for searches but need to give the history service some time
      getFavicon(data.url).then(favicon => {
        searches.query().filter({hostname: data.hostname}).update({ "favicon" : favicon });
      }, console.log);
    }, 5 * 1000);
  }
});

on(Metadata, 'add', meta => {
  searches.query().filter({url: meta.url}).update(metaMerge(meta));
});
