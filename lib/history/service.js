/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
'use strict'

const { events } = require('sdk/places/events');
const { EventTarget } = require("sdk/event/target");
const { emit } = require('sdk/event/core');
const { URL } = require('sdk/url');

const { normalize } = require('./utils');

// https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsINavHistoryService#Transition_type_constants
const TRANSITION_REDIRECT_PERMANENT = 5;
const TRANSITION_REDIRECT_TEMPORARY = 6;

const emitter = EventTarget();

events.on('data', function ({type, data}) {
  switch (type) {

    case 'history-visit':
      if (data.transitionType === TRANSITION_REDIRECT_TEMPORARY) {
        return;
      }
      emit(emitter, "visit",
        normalize(data.url, {
                            url : data.url,
                            time : Math.floor(data.time / 1000)
                          }));
    break;

    case 'history-title-changed':
      emit(emitter, "title:changed",
        normalize(data.url, {
                            url : data.url,
                            title : data.title
                          }));
    break;

    case 'history-delete-url':
      emit(emitter, "delete", normalize(data.url, { url : data.url }));
    break;

    case 'history-start-clear':
      emit(emitter, "clear");
    break;

    // bookmarks
    case 'bookmark-item-added':
      emit(emitter, "bookmark:added", normalize(data.url, { url : data.url }));
    break;

    case 'bookmark-item-removed':
      emit(emitter, "bookmark:removed", normalize(data.url, { url : data.url }));
    break;
  }
});

exports.events = emitter;
