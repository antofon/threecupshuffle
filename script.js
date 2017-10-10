document.addEventListener("DOMContentLoaded", function(){
  "use strict";
  console.log("DOMContent is properly loaded");

  var cup1Button = document.getElementById('cup1Button');
  var cup2Button = document.getElementById('cup2Button');
  var cup3Button = document.getElementById('cup3Button');
  var cup1 = document.getElementById('cup1');
  var cup2 = document.getElementById('cup2');
  var cup3 = document.getElementById('cup3');
  //firstPos and firstPosIndex needed; firstPos will not change in value because that is the position that the user thinks the ball is at. firstPosIndex or the other PosIndex vars will change because upon clicking a button, this will reduce the total button count since the button is being replaced with text in a span. Therefore, the PosIndex needs to be decremented and tailored to the current state of the PosIndex for the remaining buttons. Only decrement at stages that makes sense. firstPosIndex will never be decremented, only accessed.

  var firstPos = 1;
  var firstPosIndex =  1;
  var secondPos = 2;
  var secondPosIndex = 2;
  var thirdPos = 3;
  var thirdPosIndex = 3;
  var hideRules = document.getElementById('rules');
  var oneChance =  0;
  var play = document.getElementById('play');
  var showRules = document.getElementById('fixed-rules');
  var showCups = document.getElementById('begin');
  //will be used for random position of ball
  var positionChoice = (Math.floor(Math.random() * 3)) + 1;


  function guessFirstPos() {
    //if the user's guess equals the random position of the ball
    if(firstPos === positionChoice) {
      //in either statement that the user guesses, the other PosIndex will have to be decremented because the button is being replaced and lowering the total button length.
      secondPosIndex--;
      thirdPosIndex--;
      //accesses second element(note, position 0 is the first element, which is the 'Show Rules' button)
      var buttonElt = document.getElementsByTagName('button')[firstPosIndex];
      //create new element (span)
      var replaceButton = document.createElement('span');

      if(buttonElt && replaceButton !== null) {
        console.log("not empty.");
        console.log(buttonElt + " " + replaceButton);
      }

      else {
        console.log(buttonElt + " " + replaceButton);
      }

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

      setTimeout(function(){
        alert("Correct! Refresh the page to try again :)");
      }, 300);
      console.log('Correct! Your position is: ' + firstPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      secondPosIndex--;
      thirdPosIndex--;
      //same result as 'if' statement, but do not display ball, only 'incorrect' message
      var buttonElt = document.getElementsByTagName('button')[firstPosIndex];
      var replaceButton = document.createElement('span');

      if(buttonElt && replaceButton !== null){
        console.log(buttonElt + " " + replaceButton)
        console.log("not empty.");
      }

      else {
        console.log(buttonElt + " " + replaceButton);
      }

      replaceButton.innerHTML = buttonElt.innerHTML;
      buttonElt.parentNode.replaceChild(replaceButton,buttonElt);
      replaceButton.innerHTML = 'Incorrect!';
      replaceButton.className += 'incorrect';
      replaceButton.style.fontSize = '1.8em';
      replaceButton.style.paddingTop = '40px';

      console.log('Incorrect! Your position is: ' + firstPos + ' and the ball is at position: ' + positionChoice);
  }
}


function guessSecondPos() {
  if(secondPos === positionChoice) {

    thirdPosIndex--;
      var buttonElt2 = document.getElementsByTagName('button')[secondPosIndex];
      var replaceButton2 = document.createElement('span');
      if(buttonElt2 && replaceButton2 !== null) {
        console.log("not empty.");
        console.log(buttonElt2 + " " + replaceButton2);
      }

      else {
        console.log(buttonElt2 + " " + replaceButton2);
      }

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

      setTimeout(function(){
        alert("Correct! Refresh the page to try again :)");
      }, 300);
      console.log('Correct! Your position is: ' + secondPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      thirdPosIndex--;
      //same result as 'if' statement, but do not display ball, only 'incorrect' message
      var buttonElt2 = document.getElementsByTagName('button')[secondPosIndex];
      var replaceButton2 = document.createElement('span');

      if(buttonElt2 && replaceButton2 !== null) {
        console.log("not empty.");
        console.log(buttonElt2 + " " + replaceButton2);
      }

      else {

        console.log(buttonElt2 + " " + replaceButton2);
      }

      replaceButton2.innerHTML = buttonElt2.innerHTML;
      buttonElt2.parentNode.replaceChild(replaceButton2,buttonElt2);
      replaceButton2.innerHTML = 'Incorrect!';
      replaceButton2.className += 'incorrect';
      replaceButton2.style.fontSize = '1.8em';
      replaceButton2.style.paddingTop = '40px';

      console.log('Incorrect! Your position is: ' + secondPos + ' and the ball is at position: ' + positionChoice);
    }
}


function guessThirdPos () {
  if(thirdPos === positionChoice) {
      var buttonElt3 = document.getElementsByTagName('button')[thirdPosIndex];
      var replaceButton3 = document.createElement('span');
      if(buttonElt3 && replaceButton3 !== null) {
        console.log(buttonElt3 + " " + replaceButton3);
        console.log("not empty.");
      }

      else {
        console.log(buttonElt3 + " " + replaceButton3);
      }
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

      setTimeout(function(){
        alert("Correct! Refresh the page to try again :)");
      }, 300);
      console.log('Correct! Your position is: ' + thirdPos + ' and the ball is also at position: ' + positionChoice);
    }

    else {
      //same result as 'if' statement, but do not display ball, only 'incorrect' message
      var buttonElt3 = document.getElementsByTagName('button')[thirdPosIndex];
      var replaceButton3 = document.createElement('span');
      if(buttonElt3 && replaceButton3 !== null) {
        console.log("not empty.");
        console.log(buttonElt3 + " " + replaceButton3);
      }

      else {
        console.log(buttonElt3 + " " + replaceButton3);
      }

      replaceButton3.innerHTML = buttonElt3.innerHTML;
      buttonElt3.parentNode.replaceChild(replaceButton3,buttonElt3);
      replaceButton3.innerHTML = 'Incorrect!';
      replaceButton3.className += 'incorrect';
      replaceButton3.style.fontSize = '1.8em';
      replaceButton3.style.paddingTop = '40px';

      console.log('Incorrect! Your position is: ' + thirdPos + ' and the ball is at position: ' + positionChoice);
    }
}

    cup1Button.addEventListener('click', guessFirstPos);
    cup2Button.addEventListener('click', guessSecondPos);
    cup3Button.addEventListener('click', guessThirdPos);


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
