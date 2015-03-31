
var o;

function startdatetime() {
    $.getJSON( "http://localhost:5000/device/datetime/get/", function( data ) {
        val = data.datetime;
        if (val == undefined || val == null) {
            return;
        }
        hmid = new Date(val).getTime();
        now = new Date().getTime();
        o = now - hmid;
        displayDate();
        displayTime();
    });
}

function displayDate(){
var now = new Date();
var d = new Date(now.getTime() - o);
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
}

function displayTime(){
var now = new Date();
var d = new Date(now.getTime() - o);
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
        if (window.location.pathname.indexOf('index.html') < 0) {
            window.location.replace("index.html");
        }
    }
}

$( document ).ready(function() {
   startdatetime();
});
