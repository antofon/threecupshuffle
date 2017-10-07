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
  //will be used for random position of ball
  var positionChoice = 0;

  cup1Button.addEventListener('click',function() {

    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    //if the user's guess equals the random position of the ball
    if(firstPos === positionChoice) {
      //accesses second element(note, position 0 is the first element)
      var buttonElt = document.getElementsByTagName('button')[1];
      //create new element (span)
      var replaceButton = document.createElement('span');

      //store the button's contents into replaceButton var (which will be used)
      replaceButton.innerHTML = buttonElt.innerHTML;
      //replace the child element of the parent node. Now we are replacing the old element's info (buttonElt), with the new element's info (replaceButton)
      buttonElt.parentNode.replaceChild(replaceButton,buttonElt);
      //modifying new element's text
      replaceButton.innerHTML = 'Correct!';
      //adding the 'correct' class
      replaceButton.className += 'correct';
      replaceButton.style.fontSize = '1.8em';
      replaceButton.style.paddingTop = '40px';

      //access 'src' attribute of cup1 ID (which is for the first red cup) and overwrite with ball SVG
      cup1.src = 'metallic_ball.svg';
      cup1.style.width = '100px';
      cup1.style.height = '100px';
      cup1.style.marginTop = '80px';

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

  //when the 'Let's Play' button is pressed, hide the rules and show the cups'
  play.addEventListener('click', function() {
    hideRules.style.display = 'none';
    play.style.display = 'none';
    showCups.style.display = 'block';
    showRules.style.display = 'block';
  });

  //when the 'Show Rules' button is pressed, hide the cups and show the rules'
  showRules.addEventListener('click', function () {
    hideRules.style.display = 'block';
    play.style.display = 'block';
    showCups.style.display = 'none';
    showRules.style.display = 'none';
  });


});
