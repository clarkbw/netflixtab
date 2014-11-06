/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

const { close } = require('./lib/page/actions');
const { when: unload } = require('sdk/system/unload');

require('./lib/searches/setup');
require('./lib/history/setup');
require('./lib/tiles/setup');

// start collecting metadata
require('./lib/metadata/setup');

// setup about:newnewtab
require('./lib/page');

// Closing all about: tabs on uninstall/disable
unload(reason => {
  if (reason == 'disable' || reason == 'uninstall') {
    close();
  }
});
