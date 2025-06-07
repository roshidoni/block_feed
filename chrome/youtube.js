(function () {
  const day = new Date().getDay(); // 0=Sun, 6=Sat
  if (day === 0 || day === 6) {
    console.log("Feed Blocker: Skipping on weekend.");
    return;
  }

  function runChecks() {
    const path = window.location.pathname;
    // console.log(`Feed Blocker: Running checks for path: ${path}`);

    if (window.location.pathname === "/results") {
      console.log("Feed Blocker: Skipping on results page.");
      return;
    }
    // --- Remove Notification Button (on all non-results pages) ---
    const notificationBtn = document.querySelector(
      "ytd-notification-topbar-button-renderer",
    );
    if (notificationBtn) {
      notificationBtn.remove();
    }

    // --- General Cleanup for elements NOT related to the current page type ---
    const feedForCleanup = document.querySelector("ytd-rich-grid-renderer");
    if (path !== "/") {
      // If not on homepage
      if (feedForCleanup) {
        feedForCleanup.classList.remove("bf-feed-hidden");
      }
    }

    // --- Homepage Logic --- //
    if (path === "/") {
      const feed = document.querySelector("ytd-rich-grid-renderer");
      if (feed) {
        // Check if already hidden
        feed.classList.add("bf-feed-hidden");
      }
    }

    // Redirect /shorts pages to home page
    if (window.location.pathname.startsWith("/shorts")) {
      document.body.style.visibility = "hidden";
      window.location.href = "/";
    }

    if (window.location.pathname.startsWith("/watch")) {
      const nextResults = document.querySelector(
        "ytd-watch-next-secondary-results-renderer",
      );
      if (nextResults) {
        nextResults.classList.add("bf-feed-hidden");
      }
    }
  }

  // requestAnimationFrame(runChecks);

  // Observe DOM changes and re-run checks
  const observer = new MutationObserver((mutationsList) => {
    // Simple approach: re-run checks on any mutation.
    // More complex: Could inspect mutationsList to be more efficient.
    runChecks();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  console.log("Feed Blocker: Desktop script loaded and observer attached.");
})();
