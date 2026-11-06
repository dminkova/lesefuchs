/*
 * Leseflitzi – anonymous visitor statistics (GoatCounter, no cookies, no storage on the device).
 * Sends ONLY: the page path, the referring website (domain only), the screen width,
 * and a few fixed event names such as "lesen-start-genau".
 * Never sends: reading content, words, mistakes, scores, levels, voice, transcripts or any ID.
 * Off on test/local copies, with "Do Not Track" or "Global Privacy Control", and in automated browsers.
 * If GoatCounter is unreachable nothing happens; the app does not depend on it.
 */
(function () {
  "use strict";
  var SITE = "leseflitzi"; // GoatCounter site code -> https://leseflitzi.goatcounter.com
  var on = (location.hostname === "leseflitzi.eu" || location.hostname === "www.leseflitzi.eu") &&
    navigator.doNotTrack !== "1" && window.doNotTrack !== "1" && !navigator.globalPrivacyControl && !navigator.webdriver;
  var EVENTS = /^(lesen-start|lesen-fertig)-(genau|fluessig)$|^(woerter-start|quiz-fertig)$/;

  function send(params) {
    if (!on) return;
    try {
      var q = [];
      for (var k in params) if (params[k] !== "" && params[k] != null) q.push(k + "=" + encodeURIComponent(params[k]));
      q.push("rnd=" + Math.random().toString(36).slice(2, 8));
      var img = new Image();
      img.referrerPolicy = "no-referrer";
      img.src = "https://" + SITE + ".goatcounter.com/count?" + q.join("&");
    } catch (e) { /* statistics must never break the app */ }
  }

  function referrer() {
    try {
      if (document.referrer) {
        var u = new URL(document.referrer);
        if (u.hostname !== location.hostname) return u.protocol + "//" + u.hostname + "/";
        return "";
      }
    } catch (e) {}
    if (/FBAN|FBAV|FB_IAB|FB4A/.test(navigator.userAgent || "")) return "https://facebook.com/ (app)";
    if (/Instagram/.test(navigator.userAgent || "")) return "https://instagram.com/ (app)";
    return "";
  }

  // campaign tags in shared links, e.g. leseflitzi.eu/eltern.html?ref=fb-eltern
  function campaign() {
    var m = (location.search || "").match(/[?&](utm_source|utm_campaign|campaign|ref|src|source)=[A-Za-z0-9_.-]{1,40}/g);
    return m ? "?" + m.map(function (x) { return x.slice(1); }).join("&") : "";
  }

  window.LFStats = {
    event: function (name) { if (EVENTS.test(name)) send({ p: name, e: "true" }); }
  };
  send({ p: location.pathname || "/", r: referrer(), q: campaign(), s: (window.screen && screen.width) | 0 });
})();
