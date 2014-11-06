/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const { Class } = require('sdk/core/heritage');
const { EventTarget } = require('sdk/event/target')

const Metadata = Class({
  extends: EventTarget
});
exports.Metadata = Metadata();
