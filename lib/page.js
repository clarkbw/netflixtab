/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
'use strict';

const about = require('about-what');

const page = require('./page/events');
const { events } = require('./history/service');
const { on } = require('sdk/event/core');
const { when: unload } = require('sdk/system/unload');

const { searches, tiles, history } = require('./db');

const ABOUT_PROTOCOL = "about:";
const PAGE_NAME = "newnewtab";
exports.ABOUT_PAGE = ABOUT_PROTOCOL + PAGE_NAME;

// create about:newnewtab url handler
about.add({
  what: PAGE_NAME,
  url: 'chrome://netflixtab/content/index.html'
});

on(events, 'bookmark:added', data => {
  // page.emit('url:bookmark', data);
});

on(events, 'bookmark:removed', data => {
  // page.emit('bookmark:removed', data);
});

function values(vals) {
  if (vals && vals[0])
    return Object.keys(vals[0]).map((k) => vals[0][k]);
  return [];
}

page.on('ready', ({ message, worker }) => {
  console.log("SEARCHES", searches.query()._data);
  page.emit("searches:reset", searches.query()._data);
  page.emit("tiles", values(tiles.query()._data));
  page.emit("history:reset", history.query()._data);
});

// ensure our new tab page is this addon
require("sdk/preferences/service").set("browser.newtab.url", exports.ABOUT_PAGE);

// reset the newtab page preferences when someone uninstalls
unload(reason => {
  if (reason == 'disable' || reason == 'uninstall') {
    require("sdk/preferences/service").set("browser.newtab.url", "about:newtab");
  }
});
