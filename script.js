document.addEventListener("DOMContentLoaded", function(){
  "use strict";
  console.log("DOMContent is properly loaded");

  var cup1Button = document.getElementById('cup1Button');
  var cup2Button = document.getElementById('cup2Button');
  var cup3Button = document.getElementById('cup3Button');
  var cup1 = document.getElementById('cup1');
  var cup2 = document.getElementById('cup2');
  var cup3 = document.getElementById('cup3');
  var firstPos = 1;
  var secondPos = 2;
  var thirdPos = 3;
  var hideRules = document.getElementById('rules');
  var play = document.getElementById('play');
  var showRules = document.getElementById('fixed-rules');
  var showCups = document.getElementById('begin');
  var positionChoice = 0;

  cup1Button.addEventListener('click',function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    if(firstPos === positionChoice) {
      console.log('Correct! Your position is: ' + firstPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      console.log('Incorrect! Your position is: ' + firstPos + ' and the ball is at position: ' + positionChoice);
    }
    // console.log('cup1 here!');
    // console.log('This is position: ' + positionChoice);
  });

  cup2Button.addEventListener('click', function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    if(secondPos === positionChoice) {
      console.log('Correct! Your position is: ' + secondPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      console.log('Incorrect! Your position is: ' + secondPos + ' and the ball is at position: ' + positionChoice);
    }
    // console.log('cup2 here!');
    // console.log('This is position: ' + positionChoice);
  });

  cup3Button.addEventListener('click', function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    if(thirdPos === positionChoice) {
      console.log('Correct! Your position is: ' + thirdPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      console.log('Incorrect! Your position is: ' + thirdPos + ' and the ball is at position: ' + positionChoice);
    }


    // console.log('cup3 here!');
    // console.log('This is position: ' + positionChoice);
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
