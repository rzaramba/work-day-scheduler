var timeDisplay = "";

var update = function () {
  timeDisplay.html(moment().format("dddd MMM Do, YYYY hh:mm:ss a"));
};

$(document).ready(function () {
  timeDisplay = $("#currentDay");
  update();
  setInterval(update, 1000);
});
