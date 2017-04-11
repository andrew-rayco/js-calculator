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
        historyArray.push('/');
        historyString += '/';
        showHistory();
        break;
      case 'multiply':
        historyArray.push('*');
        historyString += '*';
        showHistory();
        break;
      case 'minus':
        historyArray.push('-');
        historyString += '-';
        showHistory();
        break;
      case 'plus':
        historyArray.push('+');
        historyString += '+';
        showHistory();
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

  function cancelEntry() {
    historyArray.pop();
    historyString = historyArray.join('');
    showHistory();
  }

  function showHistory() {
    mainDisplay.innerHTML = historyString;
    subDisplay.innerHTML = historyString;
  }

  function total() {
    mainDisplay.innerHTML = (eval(historyString));
    subDisplay.innerHTML = historyString + " = " + (eval(historyString));
  }

}); //close DOMContentLoaded
