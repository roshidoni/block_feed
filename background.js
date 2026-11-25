function blockPage(site) {
  return { redirectUrl: browser.runtime.getURL(`blocked.html?site=${site}`) };
}

browser.webRequest.onBeforeRequest.addListener(
  () => blockPage("linkedin"),
  { urls: ["*://*.linkedin.com/*"], types: ["main_frame"] },
  ["blocking"],
);

browser.webRequest.onBeforeRequest.addListener(
  () => isYouTubeBlocked() ? blockPage("youtube") : {},
  { urls: ["*://*.youtube.com/*"], types: ["main_frame"] },
  ["blocking"],
);
