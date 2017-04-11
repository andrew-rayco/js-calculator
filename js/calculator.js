document.addEventListener("DOMContentLoaded", function() {

  var mainDisplay = document.getElementsByClassName('main')[0];
  var subDisplay = document.getElementsByClassName('sub')[0];
  var keys = document.getElementsByClassName('keys')[0];
  var historyString = '';
  var historyArray = [];

  // display the right number when clicked
  keys.addEventListener('click', countHistory);

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
        historyArray.push(evt.target.id);
        historyString += parseInt(evt.target.id);
        showHistory();
        break;
    }
  }

  function keyPress(key) {
    historyArray.push(key);
    historyString += key;
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
    mainDisplay.innerHTML = (eval(historyString));
    subDisplay.innerHTML = historyString + " = " + (eval(historyString));
    historyString = '';
    historyArray = [];
  }

}); //close DOMContentLoaded
