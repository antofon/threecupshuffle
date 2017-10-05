document.addEventListener("DOMContentLoaded", function(){
  "use strict";
  console.log("DOMContent is properly loaded;");

  var hideRules = document.getElementById('rules');
  var play = document.getElementById('play');

  play.addEventListener('click', function() {
    hideRules.style.display = 'none';
    play.style.display = 'none';
  });




});
