/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

var addon = {
  on: function (signal, callback, arg) {
    // console.log(signal, "registered with callback", callback);
    if (signal === "tiles") {
      callback([{"bgColor":"","directoryId":18,"enhancedImageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/208/51f5a7c3d309c57172bb0f9291c518a1bb8a5499.png","imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/208/882fbbe03345aabd0017d9c870a2c467cb6178ec.png","title":"Mozilla Community","type":"affiliate","url":"http://contribute.mozilla.org/","frecency":1000,"lastVisitDate":8,"hostname":"contribute.mozilla.org","scheme":"http","favicon":""},{"bgColor":"#ffffff","directoryId":15,"enhancedImageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/205/7cb74a11f792a69cd78c1ff75f5b2798b0b7034a.png","imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/205/ac37566804dfb4b85ea3d51ce9ddb99f7f7b5592.png","title":"Firefox for Android","type":"affiliate","url":"https://play.google.com/store/apps/details?id=org.mozilla.firefox&referrer=utm_source%3Dmozilla%26utm_medium%3Dbanner%26utm_campaign%3Ddesktop01","frecency":1000,"lastVisitDate":7,"hostname":"play.google.com","scheme":"https","favicon":""},{"bgColor":"","directoryId":285,"imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-US/285/5d5e1732697f27b599a6680de139fd7f09b8cff1.png","title":"CITIZENFOUR","type":"sponsored","url":"https://citizenfourfilm.com/","frecency":1000,"lastVisitDate":6,"hostname":"citizenfourfilm.com","scheme":"https","favicon":""},{"bgColor":"","directoryId":286,"enhancedImageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/206/cdc0fa69424a78153bf77c1d477a8947310ce412.png","imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/206/7ffbc5244079e47334006e10e3403da3337064ca.png","title":"Mozilla Manifesto","type":"affiliate","url":"https://www.mozilla.org/about/manifesto/","frecency":1000,"lastVisitDate":5,"hostname":"www.mozilla.org","scheme":"https","favicon":""},{"bgColor":"","directoryId":287,"enhancedImageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-US/287/12ada6d5f17a9f361059cb7039c3539871fc797f.png","imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-US/287/2d96c38c2969f5b183bdf22baff66292d0892a7c.png","title":"Customize Firefox","type":"affiliate","url":"http://fastestfirefox.com/firefox/desktop/customize/","frecency":1000,"lastVisitDate":4,"hostname":"fastestfirefox.com","scheme":"http","favicon":""},{"bgColor":"#fff","directoryId":317,"imageURI":"https://dtex4kvbppovt.cloudfront.net/images/es-ES/316/aabfcf47fc6e536810e07f60e9c415e566cc266e.png","title":"Mozilla Developer Network","type":"affiliate","url":"https://developer.mozilla.org/","frecency":1000,"lastVisitDate":3,"hostname":"developer.mozilla.org","scheme":"https","favicon":""},{"bgColor":"","directoryId":19,"enhancedImageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/209/c34029b40cbed79f11dc0b1af2f203ebea850f48.png","imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/209/addcd9302886923b9eb34f938052d9d6b86a2b7a.png","title":"Firefox Marketplace","type":"affiliate","url":"https://marketplace.firefox.com/","frecency":1000,"lastVisitDate":2,"hostname":"marketplace.firefox.com","scheme":"https","favicon":""},{"bgColor":"#ffffff","directoryId":289,"enhancedImageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/320/e0442567ca52bf84d5f1b38d62ded6b8a63e1e56.png","imageURI":"https://dtex4kvbppovt.cloudfront.net/images/en-GB/320/4fb3375ca7da5c4e1b4998dde4b5647b83767c05.png","title":"Webmaker","type":"affiliate","url":"https://webmaker.org/?utm_source=directory-tiles&utm_medium=firefox-browser","frecency":1000,"lastVisitDate":1,"hostname":"webmaker.org","scheme":"https","favicon":""}]);
    } else if (signal === "history:reset") {
      callback([{"url":"http://www.nytimes.com/","time":1415301851116,"hostname":"www.nytimes.com","scheme":"http","favicon":"http://static01.nyt.com/favicon.ico","title":"Breaking News, World News & Multimedia","type":"website","twitter":{"twitter":{}},"description":"The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.","imageURI":"http://static01.nyt.com/images/icons/t_logo_291_black.png"},{"url":"http://www.nytimes.com/2014/11/06/fashion/artificial-intelligence-as-a-threat.html?ribbon-ad-idx=16&rref=homepage&module=Ribbon&version=origin&region=Header&action=click&contentCollection=Home%20Page&pgtype=article","time":1415301875023,"hostname":"www.nytimes.com","scheme":"http","favicon":"http://static01.nyt.com/favicon.ico","title":"Artificial Intelligence as a Threat","type":"article","twitter":{"twitter":{"site":"@nytimes","creator":"nickbilton"}},"description":"Smarter technology requires smarter humans to keep machines under control.","imageURI":"http://static01.nyt.com/images/2014/11/07/fashion/06DISRUPTIONWEB/06DISRUPTIONWEB-videoSixteenByNine1050.jpg"},{"url":"http://www.nytimes.com/2014/11/07/movies/in-the-theory-of-everything-stephen-hawkings-home-life.html?ribbon-ad-idx=16&rref=homepage&module=Ribbon&version=origin&region=Header&action=click&contentCollection=Home%20Page&pgtype=article","time":1415301900401,"hostname":"www.nytimes.com","scheme":"http","favicon":"http://static01.nyt.com/favicon.ico","title":"In ‘The Theory of Everything,’ Stephen Hawking’s Home Life","type":"article","twitter":{"twitter":{"site":"@nytimes","creator":"aoscott"}},"description":"Eddie Redmayne stars in James Marsh’s “The Theory of Everything,” a biographical drama about Stephen Hawking’s health, marriage and other struggles.","imageURI":"http://static01.nyt.com/images/2014/11/02/arts/02LYALL3/02LYALL3-videoSixteenByNine1050-v2.jpg"},{"url":"http://www.nytimes.com/2014/11/06/fashion/a-touch-of-brooklyn-in-ridgewood-queens.html?ribbon-ad-idx=16&rref=homepage&module=Ribbon&version=origin&region=Header&action=click&contentCollection=Home%20Page&pgtype=article","time":1415301909932,"hostname":"www.nytimes.com","scheme":"http","favicon":"http://static01.nyt.com/favicon.ico","title":"A Touch of Brooklyn in ... Ridgewood, Queens?","type":"article","twitter":{"twitter":{"site":"@nytimes"}},"description":"Ridgewood, Queens, is the new frontier for bohemians who are either priced out of Brooklyn or fed up with it.","imageURI":"http://static01.nyt.com/images/2014/11/06/fashion/06RIDGEWOOD/06zRIDGEWOOD-videoSixteenByNine1050.jpg"},{"url":"http://www.youtube.com/watch?v=gPbzMMorE_E","time":1415301935060,"hostname":"www.youtube.com","scheme":"http","favicon":"http://s.ytimg.com/yts/img/favicon_32-vflWoMFGx.png","title":"▶ Young Thug 2 B's (Danny Glover) OFFICIAL MUSIC VIDEO - YouTube","type":"video","twitter":{"twitter":{"site":"@youtube"}},"description":"Young Thug 2 B's (Danny Glover) OFFICIAL MUSIC VIDEO Download 2 B's on iTunes https://itunes.apple.com/us/album/2-bitches-single/id891191991","imageURI":"http://i.ytimg.com/vi/gPbzMMorE_E/maxresdefault.jpg"},{"url":"http://www.theguardian.com/film/2012/may/18/danny-glover-good-cop","time":1415301943241,"hostname":"www.theguardian.com","scheme":"http","favicon":"http://static.guim.co.uk/favicon.ico","title":"Danny Glover: the good cop | Film | The Guardian"}]);
    } else if (signal === "searches:reset") {
      callback([{"url":"http://www.amazon.com/exec/obidos/external-search/?field-keywords=fitbit&mode=blended&tag=mozilla-20&sourceid=Mozilla-search","time":1415300135716,"hostname":"www.amazon.com","scheme":"http","favicon":"","terms":"fitbit","title":"fitbit"},{"url":"https://search.yahoo.com/search?p=movies&ei=UTF-8&fr=moz35","time":1415300159438,"hostname":"search.yahoo.com","scheme":"https","favicon":"","terms":"movies","title":"movies"},{"url":"https://www.google.com/search?q=maker+faire&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:unofficial&client=firefox-nightly&channel=sb","time":1415300172195,"hostname":"www.google.com","scheme":"https","favicon":"","terms":"maker faire","title":"maker faire"}]);
    }
  },
  emit: function (signal) {
    console.log("signal", arguments);
  }
};

