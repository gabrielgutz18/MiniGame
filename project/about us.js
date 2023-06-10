var amButton = document.getElementById("AM");
var ggButton = document.getElementById("GG");
var jvButton = document.getElementById("JV");
var jsButton = document.getElementById("JS");
var ghButton = document.getElementById("GH");

// Define the URLs to redirect to
var amURL = "https://www.facebook.com/jeorge.assis00";
var ggURL = "https://www.facebook.com/gab.l.gutierrez/";
var jvURL = "https://www.facebook.com/profile.php?id=100054731844880";
var jsURL = "https://www.facebook.com/saculo.jenica";
var ghURL = "https://www.facebook.com/gianfrancis.hachaso";

// Add event listeners to each button
amButton.addEventListener("click", function() {
  window.location.href = amURL;
});

ggButton.addEventListener("click", function() {
  window.location.href = ggURL;
});

jvButton.addEventListener("click", function() {
  window.location.href = jvURL;
});

jsButton.addEventListener("click", function() {
  window.location.href = jsURL;
});

ghButton.addEventListener("click", function() {
  window.location.href = ghURL;
});