# Feed Blocker

Feed Blocker is a Firefox extension for YouTube, LinkedIn, and Telegram Web.

| Site | Behavior |
| --- | --- |
| YouTube | From **10 p.m. to 7 a.m.**, the extension blocks the whole site, including tabs left open at 10 p.m. From **7 a.m. to 10 p.m.**, typed search and regular videos are available. The extension hides the home feed, watch-page recommendations, voice search, the Create button, and the notification button outside search. It also hides Shorts, You, More from YouTube, Explore, Report history, and the footer from the sidebar. Direct Shorts visits redirect to the home page. The schedule runs every day. |
| LinkedIn | The extension blocks the site every day. |
| Telegram Web | On weekdays, the extension removes unpinned group and channel entries and hides chat-folder badges. Private chats and pinned entries remain visible. Telegram Web A redirects to Web K every day. |

The schedule and weekday rules use the browser’s local time.

## Load in Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Choose **Load Temporary Add-on** and select `manifest.json` from this folder.
3. After editing the files, click **Reload** on the extension’s card and reopen the sites you’re testing. Firefox removes temporary add-ons when it restarts.

## Verify changes

1. Between 7 a.m. and 10 p.m., check the YouTube home feed is hidden, regular videos appear in search without Shorts carousels, and watch-page recommendations are hidden. Check that Home and Subscriptions are visible in the sidebar and the hidden sections in the table are absent. Visiting a Shorts URL should return you to the home page.
2. Between 10 p.m. and 7 a.m., check that a YouTube video URL and a tab left open at 10 p.m. show the block page. Check LinkedIn shows its block page at any time.
3. On a weekday, open Telegram Web K. Check that a private chat and a pinned group remain visible, an unpinned group is absent, and folder badges are hidden. On a weekend, Telegram leaves those lists and badges intact.
