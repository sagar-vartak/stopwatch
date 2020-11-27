var x;
var y = 0;
var warnSound = new Audio("./sounds/Beep.mp3");
function start() {
  if (x == y) {
    warnSound.play();
    console.log("function already running");
    document.getElementById("message").innerHTML = "Watch Already Running";
    setTimeout(function () {
      document.getElementById("message").innerHTML = "";
    }, 5000);
  } else {
    x = setInterval(timer, 1000);
    console.log("time", x);
    y = x;
  }
} /* Start */

function stop() {
  clearInterval(x);
  y++;
} /* Stop */

var sec = 0; /* holds incrementing value */
var min = 0;
var hour = 0;

/* Contains and outputs returned value of  function checkTime */

var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* Output variables */

function timer() {
  /* Main Timer */

  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  sec++;
  document.getElementById("sec").innerHTML = secOut;
  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
  }
  console.log(secOut);
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  /*Reset*/

  sec = 0;
  min = 0;
  hour = 0;

  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}

function myFunction(x) {
  var element = document.body;
  element.classList.toggle("light-header-footer");
  x.classList.toggle("fa-moon-o");
}
