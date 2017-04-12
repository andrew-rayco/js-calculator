document.addEventListener("DOMContentLoaded", function() {

  var mainDisplay = document.getElementsByClassName('main')[0];
  var subDisplay = document.getElementsByClassName('sub')[0];
  var keys = document.getElementsByClassName('keys')[0];
  var historyString = '';
  var historyArray = [];
  var totalTemp;


  // display the right number when clicked
  keys.addEventListener('click', countHistory);


  // Animations
  keys.addEventListener('mousedown', animateDown);
  keys.addEventListener('mouseup', animateUp);

  function animateDown(evt) {
    var pressed = document.getElementById(evt.target.id);
    pressed.classList.add('pressed');
  }

  function animateUp(evt) {
    var pressed = document.getElementById(evt.target.id);
    pressed.classList.remove('pressed');
  }


  /* convert button id's into workable operator strings, or call function based
  on whether AC, CE or equals button. Blank case to catch clicks between
  buttons */
  function countHistory(evt) {
    switch(evt.target.id) {
      case 'blank':
        break;
      case 'all-cancel':
        historyString = '';
        showHistory();
        break;
      case 'cancel-entry':
        cancelEntry();
        break;
      case 'divide':
        keyPress('/');
        break;
      case 'multiply':
        keyPress('*');
        break;
      case 'minus':
        keyPress('-');
        break;
      case 'plus':
        keyPress('+');
        break;
      case 'decimal':
        keyPress('.');
        break;
      case 'equals':
        total();
        break;
      default:
        keyPress(evt.target.id);
        break;
    }
  }


  // Action to determine if working on result of previous calculation or new calc
  function keyPress(key) {
    // if totalTemp exists and keypress is an operator, operate on totalTemp
    if ((!isNaN(totalTemp)) && (isNaN(key))) {
      historyArray.push(totalTemp, key);
      historyString += totalTemp + key;
      totalTemp = '';
    } else {
      // if keypress is a number, clear totalTemp and start new calculation
      totalTemp = '';
      historyArray.push(key);
      historyString += key;
    }
    showHistory();
  }


  function cancelEntry() {
    historyArray.pop();
    historyString = historyArray.join('');
    showHistory();
  }


  function showHistory(key) {
    mainDisplay.innerHTML = historyString;
    subDisplay.innerHTML = historyString;
  }


  function total() {
    totalTemp = (eval(historyString));
    mainDisplay.innerHTML = totalTemp;
    subDisplay.innerHTML = historyString + " = " + totalTemp;
    historyString = '';
    historyArray = [];
  }

}); //close DOMContentLoaded
