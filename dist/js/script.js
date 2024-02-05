 

let navbar = document.querySelector("nav");
function showMenu(){
    navbar.classList.toggle("active");
}

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// Disable Right-Click
$(document).ready(function() {
  $("body").on("contextmenu", function(e) {
      return false;
    });
});
