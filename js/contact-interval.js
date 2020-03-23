// variables to hold seconds, the recurisve call to setTime, and all form elements (except reset and submit)
var sec = 0;
var ticker;
var formElements;

// run anaimation after the webpage is loaded
window.onload = function() {
  ticker = setInterval(setTime, 1000);
  document.getElementById("fname").value = localStorage.getItem("fname");
}

// function that adds 'click' event listeners to start animation for all form elements except reset and submit
function setFormListeners() {
  formElements = document.getElementsByClassName("formElement");
  for (var i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener('click', startTime, false);
  }
}

// function that removes 'click' event listeners for all form elements except reset and submit
function removeFormListeners() {
  formElements = document.getElementsByClassName("formElement");
  for (var i = 0; i < formElements.length; i++) {
    formElements[i].removeEventListener('click', startTime);
  }
}

// variable that starts the timer
function startTime() {
  ticker = setInterval(setTime, 1000);
  removeFormListeners();
}

// function that implements the animation
function setTime() {
  sec++;
  document.getElementById("sec").innerHTML = sec;
}

// function that stops the timer animation and resets everything
function stopTime() {
  clearInterval(ticker);
  document.getElementById("sec").innerHTML = 0;
  sec = 0;
  setFormListeners();
}

