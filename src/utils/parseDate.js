export function parseDate(tdate) {
  var system_date = new Date(Date.parse(tdate));
  var user_date = new Date();
  if (K.ie) {
    system_date = Date.parse(tdate.replace(/( \+)/, " UTC$1"));
  }
  var diff = Math.floor((user_date - system_date) / 1000);
  if (diff <= 1) {
    return "just now";
  }
  if (diff < 20) {
    return diff + " seconds ago";
  }
  if (diff < 40) {
    return "half a minute ago";
  }
  if (diff < 60) {
    return "less than a minute ago";
  }
  if (diff <= 90) {
    return "one minute ago";
  }
  if (diff <= 3540) {
    return Math.round(diff / 60) + " minutes ago";
  }
  if (diff <= 5400) {
    return "1 hour ago";
  }
  if (diff <= 86400) {
    return Math.round(diff / 3600) + " hours ago";
  }
  if (diff <= 129600) {
    return "1 day ago";
  }
  if (diff < 604800) {
    return Math.round(diff / 86400) + " days ago";
  }
  if (diff <= 777600) {
    return "1 week ago";
  }
  return "on " + system_date;
}

var K = (function () {
  var a = navigator.userAgent;
  return {
    ie: a.match(/MSIE\s([^;]*)/),
  };
})();
