const YOUTUBE_OPENS_AT = 7;
const YOUTUBE_CLOSES_AT = 22;

function isYouTubeBlocked(now = new Date()) {
  const hour = now.getHours();
  return hour < YOUTUBE_OPENS_AT || hour >= YOUTUBE_CLOSES_AT;
}

// Called during the open window, so the next cutoff is today.
function millisecondsUntilYouTubeCutoff(now) {
  const cutoff = new Date(now);
  cutoff.setHours(YOUTUBE_CLOSES_AT, 0, 0, 0);
  return cutoff - now;
}
