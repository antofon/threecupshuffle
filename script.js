document.addEventListener("DOMContentLoaded", function(){
  "use strict";
  console.log("DOMContent is properly loaded");

  var cup1Button = document.getElementById('cup1Button');
  var cup2Button = document.getElementById('cup2Button');
  var cup3Button = document.getElementById('cup3Button');
  var hideRules = document.getElementById('rules');
  var play = document.getElementById('play');
  var showRules = document.getElementById('fixed-rules');
  var showCups = document.getElementById('begin');
  var positionChoice = 0;

  cup1Button.addEventListener('click',function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    console.log('cup1 here!');
    console.log('This is position: ' + positionChoice);
  });

  cup2Button.addEventListener('click', function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    console.log('cup2 here!');
    console.log('This is position: ' + positionChoice);
  });

  cup3Button.addEventListener('click', function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    console.log('cup3 here!');
    console.log('This is position: ' + positionChoice);
  });

  play.addEventListener('click', function() {
    hideRules.style.display = 'none';
    play.style.display = 'none';
    showCups.style.display = 'block';
    showRules.style.display = 'block';
  });

  showRules.addEventListener('click', function () {
    hideRules.style.display = 'block';
    play.style.display = 'block';
    showCups.style.display = 'none';
    showRules.style.display = 'none';
  });


});
