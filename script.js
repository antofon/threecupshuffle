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
      //accesses second element(note, position 0 is the first element, which is the 'Show Rules' button)
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
      //same result as 'if' statement, but do not display ball, only 'incorrect' message
      var buttonElt = document.getElementsByTagName('button')[1];
      var replaceButton = document.createElement('span');

      replaceButton.innerHTML = buttonElt.innerHTML;
      buttonElt.parentNode.replaceChild(replaceButton,buttonElt);
      replaceButton.innerHTML = 'Incorrect!';
      replaceButton.className += 'incorrect';
      replaceButton.style.fontSize = '1.8em';
      replaceButton.style.paddingTop = '40px';

      //cup1.style.display = 'none';
    //   var playAgain = prompt("Would you like to play again? (Yes or No)");
    //   if(playAgain.toUpperCase() === 'YES') {
    //     alert("Great! Please refresh the page to begin a new game.");
    //   }
    //
    //   else {
    //     alert("Okay, see you next time!");
    //   }
    //   console.log('Incorrect! Your position is: ' + firstPos + ' and the ball is at position: ' + positionChoice);
     }
  });


  cup2Button.addEventListener('click', function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    if(secondPos === positionChoice) {
      var buttonElt2 = document.getElementsByTagName('button')[2];
      var replaceButton2 = document.createElement('span');

      replaceButton2.innerHTML = buttonElt2.innerHTML;
      buttonElt2.parentNode.replaceChild(replaceButton2,buttonElt2);
      replaceButton2.innerHTML = 'Correct!';
      replaceButton2.className += 'correct';
      replaceButton2.style.fontSize = '1.8em';
      replaceButton2.style.paddingTop = '40px';

      cup2.src = 'metallic_ball.svg';
      cup2.style.width = '100px';
      cup2.style.height = '100px';
      cup2.style.marginTop = '80px';

      console.log('Correct! Your position is: ' + secondPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      //same result as 'if' statement, but do not display ball, only 'incorrect' message
      var buttonElt2 = document.getElementsByTagName('button')[2];
      var replaceButton2 = document.createElement('span');

      replaceButton2.innerHTML = buttonElt2.innerHTML;
      buttonElt2.parentNode.replaceChild(replaceButton2,buttonElt2);
      replaceButton2.innerHTML = 'Incorrect!';
      replaceButton2.className += 'incorrect';
      replaceButton2.style.fontSize = '1.8em';
      replaceButton2.style.paddingTop = '40px';

      console.log('Incorrect! Your position is: ' + secondPos + ' and the ball is at position: ' + positionChoice);
    }
  });


  cup3Button.addEventListener('click', function() {
    positionChoice = (Math.floor(Math.random() * 3)) + 1;
    if(thirdPos === positionChoice) {
      var buttonElt3 = document.getElementsByTagName('button')[3];
      var replaceButton3 = document.createElement('span');

      replaceButton3.innerHTML = buttonElt3.innerHTML;
      buttonElt3.parentNode.replaceChild(replaceButton3,buttonElt3);
      replaceButton3.innerHTML = 'Correct!';
      replaceButton3.className += 'correct';
      replaceButton3.style.fontSize = '1.8em';
      replaceButton3.style.paddingTop = '40px';

      cup3.src = 'metallic_ball.svg';
      cup3.style.width = '100px';
      cup3.style.height = '100px';
      cup3.style.marginTop = '80px';

      console.log('Correct! Your position is: ' + thirdPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      //same result as 'if' statement, but do not display ball, only 'incorrect' message
      var buttonElt3 = document.getElementsByTagName('button')[3];
      var replaceButton3 = document.createElement('span');

      replaceButton3.innerHTML = buttonElt3.innerHTML;
      buttonElt3.parentNode.replaceChild(replaceButton3,buttonElt3);
      replaceButton3.innerHTML = 'Incorrect!';
      replaceButton3.className += 'incorrect';
      replaceButton3.style.fontSize = '1.8em';
      replaceButton3.style.paddingTop = '40px';


      console.log('Incorrect! Your position is: ' + thirdPos + ' and the ball is at position: ' + positionChoice);
    }
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
