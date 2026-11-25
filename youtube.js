(function () {
  let redirecting = false;
  let cutoffTimer;

  function redirect(url) {
    redirecting = true;
    window.location.replace(url);
  }

  function applyRules() {
    clearTimeout(cutoffTimer);
    if (redirecting) return;

    const now = new Date();
    if (isYouTubeBlocked(now)) {
      redirect(browser.runtime.getURL("blocked.html?site=youtube"));
      return;
    }

    const [, page] = window.location.pathname.split("/");
    if (page === "shorts") {
      redirect("/");
      return;
    }

    document.documentElement?.setAttribute("data-bf-youtube-page", page || "home");

    // Recheck periodically if the system clock or time zone changes.
    cutoffTimer = setTimeout(applyRules, Math.min(millisecondsUntilYouTubeCutoff(now), 60_000));
  }

  applyRules();
  document.addEventListener("DOMContentLoaded", applyRules, { once: true });
  document.addEventListener("visibilitychange", applyRules);
  window.addEventListener("yt-navigate-finish", applyRules, true);
  window.addEventListener("pageshow", applyRules);
  window.addEventListener("popstate", applyRules);
})();
