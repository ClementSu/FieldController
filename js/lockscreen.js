
$( document ).ready(function() {
	$(".numeric").mousedown(function(e) {
    e.preventDefault();
    var val = $(this).text();
    var inputtxt = $('#PinForm');
    inputtxt.val(inputtxt.val() + val);
    return false;
	});
	
	$(".del").mousedown(function(e) {
	e.preventDefault();
    var inputtxt = $('#PinForm');
	var mystr = inputtxt.val();
	inputtxt.val(mystr.substring(0, mystr.length - 1));
	return false;
	});
	
	$(".enter").mousedown(function(e) {
	e.preventDefault();
	if (validatePIN($('#PinForm').val()) != true)
	{
	alert('Incorrect PIN!');
	e.preventDefault();
	$('#PinForm').val("");
	return;
	} else {
		window.location = "pointscreen.html";
	}
	
	});
	

});

function validatePIN(pin) {
	var resp = $.ajax({
        type: "GET",
        url: "http://localhost:5000/auth/verify/?pin=" + pin,
        async: false
    }).responseText;
    resp = JSON.parse(resp);
    return resp.success;
}

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