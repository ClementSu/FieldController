
$(document).ready(function () {

	$(".numeric").mousedown(function(e) {	// when a number is pressed, print the number
    e.preventDefault();
    var val = $(this).text();
    var inputtxt = $('#PinForm');
    inputtxt.val(inputtxt.val() + val);
    return false;
	});
	
	$(".del").mousedown(function(e) {	// when delete is pressed, backspace the PIN
	e.preventDefault();
    var inputtxt = $('#PinForm');
	var mystr = inputtxt.val();
	inputtxt.val(mystr.substring(0, mystr.length - 1));
	return false;
	});
	
	$(".enter").mousedown(function(e) {	//when enter is pressed, submit the PIN
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

function validatePIN(pin) {	//check if PIN matches value stored in server
	var resp = $.ajax({
        type: "GET",
        url: "http://localhost:5000/auth/verify/?pin=" + pin,
        async: false,
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
        	alert(errorThrown); 
    	}     
    }).responseText;
    resp = JSON.parse(resp);
    return resp.success;
}
