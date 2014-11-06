/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const tabs = require("sdk/tabs");
const { ABOUT_PAGE } = require('../page');

function close() {
  // check all tabs
  for each (let tab in tabs) {
    if (tab.url === ABOUT_PAGE) {
      tab.close();
    }
  }
}
exports.close = close;
