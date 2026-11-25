const site = new URLSearchParams(location.search).get("site");
const message = document.querySelector("#message");

if (site === "youtube") {
  message.textContent = "YouTube is blocked.";
  document.querySelector("#youtube-hours").hidden = false;
} else if (site === "linkedin") {
  message.textContent = "LinkedIn is blocked.";
}
