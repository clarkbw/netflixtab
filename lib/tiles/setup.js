/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

const { merge } = require('sdk/util/object');
const { on } = require('sdk/event/core');

const { Metadata } = require('../metadata/events');
const { metaMerge } = require('../metadata/utils');
const { events } = require('../history/service');
const { normalize } = require('../history/utils');
const { NewTabUtils } = require("resource://gre/modules/NewTabUtils.jsm");
const { DirectoryLinksProvider } = require("resource:///modules/DirectoryLinksProvider.jsm");

const { tiles } = require('../db');

NewTabUtils.init();
DirectoryLinksProvider.init();

// { 
// title: string
// type: string enum
// url: string
// lastVisitDate: int
// frecency: int
// }

on(events, 'title:changed', data => {
  tiles.query().filter({url: data.url}).update({ title : data.title });
});

on(events, 'visit', data => {
  let sites = NewTabUtils.links.getLinks().map((t) => normalize(t.url, t));
  console.log("SITES", sites);
  tiles.load(sites);
  console.log("TILES SITES", tiles);
});

on(events, 'delete', data => {
  tiles.query().filter({url: data.url}).remove();
});

on(Metadata, 'add', meta => {
  tiles.query().filter({url: meta.url}).update(metaMerge(meta));
});
