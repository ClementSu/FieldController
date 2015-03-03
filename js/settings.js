var thetime = "5:48 PM";
var thepin = "******";
$(document).ready(function() {
    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'inline';     
    
    //make time editable
	$('#time').editable({
    type: 'text',
    title: 'Enter time',
    success: function(response, newValue) {
        thetime = newValue; //update backbone model
    }
	
	});
	
		$("#lockbutton").click(function() //hypothetical activation control
    {
        $("#lockscreen").css("width", "100%");
        $("#lockscreen").css("height", "100%");
        $("#lockscreen").css("z-index", "1000");
        //or dynamically generate z-index value
  //      $("#lockscreen").fadeIn();
    });


	
    $('#date').editable({
	
		success: function(response, newValue) 
		{
		}
	});
    //make status editable

});

function displayDate(){
var d = new Date();
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
document.getElementById("datebar").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
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
document.getElementById("timebar").innerHTML = d.getHours() + ":" + min + ":" + sec;

      setTimeout(function () {
        displayTime();
    }, 1000);
}
function displayPIN() {
document.getElementById("pin").innerHTML = thepin;
}



