"use strict";

var isGA = /https?:\/\/(?:www\.|ssl\.)?google-analytics\.com\//
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	var cancel = isGA.test(details.url);
    console.log(cancel);
    console.log('was blocked on');
    return { cancel: isGA.test(details.url) };
  },
  { urls: [ "<all_urls>", "http://*/*", "https://*/*" ] },
  ["blocking"]);
