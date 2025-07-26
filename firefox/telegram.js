(function () {
  // Redirect from /a to /k
  console.log(window.location.pathname);
  if (window.location.pathname === "/a/") {
    window.location.href = "https://web.telegram.org/k";
    return;
  }

  const day = new Date().getDay();
  // if (day === 0 || day === 6) return;

  function removeItems() {
    document.querySelectorAll("ul.chatlist").forEach((chatlist) => {
      const chatsList = chatlist.querySelectorAll("a");
      console.log(chatlist.length);
      for (let i = 0; i < chatsList.length; i++) {
        const link = chatsList[i];
        const peerId = link.getAttribute("data-peer-id");
        if (link.childNodes[1].classList.contains("has-only-pinned-badge")) {
          console.log("skipped");
          continue;
        }
        if (peerId && peerId.startsWith("-")) {
          console.log("removed");
          link.remove();
        }
      }
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
