$( document ).ready(function() {

	$(".numeric").mousedown(function(e) {
    e.preventDefault();
    var val = $(this).text();
    var inputtxt = $(document.activeElement);
    inputtxt.val(inputtxt.val() + val);
    return false;
	});
	
	$(".del").mousedown(function(e) {
	e.preventDefault();
	var inputtxt = $(document.activeElement);
	var mystr = inputtxt.val();
	inputtxt.val(mystr.substring(0, mystr.length - 1));
	return false;
	});
	
	$(".enter").mousedown(function(e) {
	e.preventDefault();
	if ($('#NewPinForm').val().length < 3) {
		alert('PIN must be at least 3 digits');
		return;
	}
	if ($('#NewPinForm').val() != $('#ConfirmPinForm').val())
	{
	alert('New PIN Fields Do Not Match!');
	return;
	}
	if (changePIN($('#PinForm').val(), $('#NewPinForm').val()) != true) {
		alert('Incorrect Existing PIN!');
		return;
	} else {
	
	alert('PIN Change Success!');
	$('#PinForm').val("");
	$('#NewPinForm').val("");
	$('#ConfirmPinForm').val("");
	
	}

	});
	

});

function changePIN(currentpin, newpin) {	//changes the stores PIN on the server
	var resp = $.ajax({
        type: "POST",
        url: "http://localhost:5000/auth/set/",
        async: false,
        data: {cpin: currentpin, npin: newpin}
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