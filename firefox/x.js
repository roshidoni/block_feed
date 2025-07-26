const main = () => {
  const day = new Date().getDay();

  if (day === 0 || day === 6) {
    return;
  }
  const currentHour = new Date().getHours();

  if (currentHour < 17 || currentHour >= 22) {
    // Stop the page from loading further.
    window.stop();

    // Replace the content.
    document.documentElement.innerHTML = `
      <head>
        <title>Blocked</title>
        <style>
          body {
            background-color: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }
          h1 {
            font-size: 2em;
          }
        </style>
      </head>
      <body>
        <h1>x.com is blocked until 5 PM</h1>
      </body>
    `;
  }
};
main();
