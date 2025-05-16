# Feed Blocker

A Chrome extension designed to help you stay focused by blocking distracting feeds on popular platforms like YouTube and Telegram.

## 🌟 Overview

Feed Blocker helps you reclaim your time and attention by:

- Blocking YouTube home feed, Shorts, and recommended videos
- Removing Telegram group chats from your chat list
- Working on both desktop and mobile versions of YouTube
- Displaying placeholder images where feeds would normally appear
- Automatically disabling itself on weekends for work-life balance

## ✨ Features

### YouTube

- **Home Feed Blocking**: Hides the main feed on YouTube's homepage
- **Shorts Blocking**: Redirects from Shorts pages to the homepage
- **Recommended Videos Blocking**: Hides the "Up Next" and recommended videos on watch pages
- **Notification Button Removal**: Removes the notification button to reduce distractions
- **Weekend Mode**: Automatically disables blocking on weekends
- **Search Results Preserved**: Does not interfere with search results pages

### Telegram Web

- **Group Chat Filtering**: Removes group chats from your chat list
- **Badge Removal**: Hides notification badges from menu items
- **Web Client Redirection**: Automatically redirects from /a/ to /k/ client
- **Weekend Mode**: Automatically disables blocking on weekends

## 📱 Platform Support

- **YouTube Desktop**: Full support for www.youtube.com
- **YouTube Mobile**: Full support for m.youtube.com
- **Telegram Web**: Support for web.telegram.org

## 🔧 Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked" and select the project directory
5. The extension is now installed and active

## 💻 Usage

Once installed, the extension works automatically:

- On YouTube, feeds and distracting elements will be hidden during weekdays
- On Telegram Web, group chats will be filtered out during weekdays
- All blocking is automatically disabled on weekends (Saturday and Sunday)

No configuration is needed - just install and enjoy a distraction-free experience!

## 🛠️ Technical Details

The extension uses:
- Content scripts that run on page load
- MutationObserver to handle dynamically loaded content
- CSS for styling placeholder images and hiding elements
- Separate scripts for desktop and mobile YouTube versions

## 📄 License

MIT License - Feel free to modify and use as needed!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
