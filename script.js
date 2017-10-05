document.addEventListener("DOMContentLoaded", function(){
  "use strict";
  console.log("DOMContent is properly loaded;");

  var hideRules = document.getElementById('rules');
  var showRules = document.getElementById('fixed-rules');
  var showCups = document.getElementById('begin');
  var play = document.getElementById('play');

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
