document.addEventListener("DOMContentLoaded", function() {

  var display = document.getElementsByClassName('screen')[0];
  var keys = document.getElementsByClassName('keys')[0];
  var historyString = '';
  var total;

  // display the right number when clicked
  keys.addEventListener('click', countHistory);

  function countHistory(evt) {

    switch(evt.target.id) {
      case 'all-cancel':
        historyString = '';
        display.innerHTML = historyString;
        break;
      case 'cancel-entry':
        alert('cancel-entry');
        display.innerHTML = historyString;
        break;
      case 'divide':
        historyString += '/';
        display.innerHTML = historyString;
        break;
      case 'multiply':
        historyString += '*';
        display.innerHTML = historyString;
        break;
      case 'minus':
        historyString += '-';
        display.innerHTML = historyString;
        break;
      case 'plus':
        historyString += '+';
        display.innerHTML = historyString;
        break;
      case 'equals':
        total();
        break;
      default:
        historyString += parseInt(evt.target.id);
        display.innerHTML = historyString;
    }
    // console.log(parseInt(evt.target.id));


    function total() {
      display.innerHTML = (eval(historyString));
      console.log(eval(historyString));
    }

    // displayCalc(historyString);
  }

  // function displayCalc(history) {
  //
  //   display.innerHTML = history;
  // }






}); //close DOMContentLoaded
