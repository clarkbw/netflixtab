/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

const { PageMod } = require("sdk/page-mod");
const { data } = require('sdk/self');
const { emit } = require('sdk/event/core');

const { Metadata } = require('./events');

PageMod({
  include: ["*", "resource://*"],
  contentScriptWhen: 'end',
  contentScriptFile: data.url("metadata-pagemod.js"),
  attachTo: ["existing", "top"],
  onAttach: function(worker) {
    worker.port.on("metas", metas => emit(Metadata, "add", metas));
    worker.port.on("destroy", () => worker.destroy());
  }
});
