
var c = 0;
var t;
var timerIsOn = 0;
var date = new Date;
var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();


function timedCount() {
  document.getElementById("txt").value = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function start() {
  if (!timerIsOn) {
    timerIsOn = 1;
    timedCount();
  }
}

function pause() {
  clearTimeout(t);
  timerIsOn = 0;
}

function reset() {


}