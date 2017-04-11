document.addEventListener("DOMContentLoaded", function() {

  var mainDisplay = document.getElementsByClassName('main')[0];
  var subDisplay = document.getElementsByClassName('sub')[0];
  var keys = document.getElementsByClassName('keys')[0];
  var historyString = '';
  var historyArray = [];
  var totalTemp;

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
    if (totalTemp || totalTemp == 0) {
      historyArray.push(totalTemp, key);
      console.log(historyArray);
      historyString += totalTemp + key;
      totalTemp = '';
    } else {
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
