"use strict";

chrome.webRequest.onBeforeRequest.addListener(
  ({ url = "" }) => {
    const mark = "target=";
    const markIndex = url.indexOf(mark);

    if (markIndex > -1) {
      const redirectUrl = decodeURIComponent(
        url.slice(markIndex + mark.length).replace(/&.*$/, "")
      );
      return { redirectUrl };
    }
  },
  {
    urls: ["*://link.zhihu.com/*"]
  },
  ["blocking"]
);
