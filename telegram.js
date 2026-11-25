(function () {
  if (window.location.pathname === "/a/") {
    window.location.href = "https://web.telegram.org/k";
    return;
  }

  const day = new Date().getDay();
  if (day === 0 || day === 6) return;

  function removeItems() {
    for (const link of document.querySelectorAll('ul.chatlist a[data-peer-id^="-"]')) {
      if (!link.querySelector(".has-only-pinned-badge")) {
        link.remove();
      }
    }

    document
      .querySelectorAll(".menu-horizontal-div-item-span .badge")
      .forEach((badge) => {
        badge.remove();
      });
  }

  removeItems();
  const observer = new MutationObserver(removeItems);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
})();
