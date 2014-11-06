/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* jshint strict: true, esnext: true, newcap: false, globalstrict: true,
   devel: true, node: true */

"use strict";

exports.metaMerge = function merge(meta) {
  let item = {};
  // make sure our OG:URL is a better version of the original
  // if (meta["og:url"] && meta["og:url"].length < item.url.length && meta["og:url"].indexOf(item.url)) {
  //   item.url = meta["og:url"];
  // }
  item.title = meta["og:title"] || meta["twitter:title"];
  item.type = meta["og:type"];
  item.twitter = { twitter : { site : meta["twitter:site"], creator : meta["twitter:creator"] }};
  item.description = meta["og:description"] || meta["twitter:description"];
  item.imageURI = meta['og:image'] || meta["twitter:image"] || meta["twitter:image:src"] || meta["image_src"] || meta["icon:fluid-icon"] || item.imageURI;
  return item;
};
