function displayDate(){
var d = new Date();
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
}

function displayTime(){
var d = new Date();
var min = d.getMinutes();
if (min < 10)
min = "0" + min.toString();

var sec = d.getSeconds();
if (sec < 10)
sec = "0" + sec.toString();

document.getElementById("time").innerHTML = d.getHours() + ":" + min + ":" + sec;

    setTimeout(function () {
      displayTime();
    }, 1000);
}

var timer = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        timer = 0;
    });
    $(this).keypress(function (e) {
        timer = 0;
    });
});

function timerIncrement() {
    timer = timer + 1;
    if (timer > 1) { // 1 minutes
        window.location.replace("index.html");
    }
}
