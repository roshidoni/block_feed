(function () {
  // Redirect from /a to /k
  console.log(window.location.pathname);
  if (window.location.pathname === "/a/") {
    window.location.href = "https://web.telegram.org/k";
    return;
  }

  const day = new Date().getDay();
  if (day === 0 || day === 6) return;

  function removeItems() {
    document.querySelectorAll("ul.chatlist").forEach((chatlist) => {
      chatlist.querySelectorAll("a").forEach((link) => {
        const peerId = link.getAttribute("data-peer-id");
        if (peerId && peerId.startsWith("-")) {
          link.remove();
        }
      });
    });

    // Remove badge elements that are inside menu-horizontal-div-item-span elements
    document
      .querySelectorAll(".menu-horizontal-div-item-span .badge")
      .forEach((badge) => {
        badge.remove();
      });
  }

  removeItems();
  const observer = new MutationObserver(removeItems);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})(); 