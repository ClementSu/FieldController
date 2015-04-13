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
		alert('New PIN must be at least 3 digits');
		return;
	}
	if ($('#NewPinForm').val() != $('#ConfirmPinForm').val())
	{
	alert('New PIN Fields Do Not Match!');
	return;
	}
	if (changePIN($('#PinForm').val(), $('#NewPinForm').val()) != true) {
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
        data: {cpin: currentpin, npin: newpin},

        error: function (XMLHttpRequest, textStatus, errorThrown){
        	if (errorThrown == "UNAUTHORIZED"){ //if wrong PIN
        		alert('Incorrect PIN!');
				$('#PinForm').val("");
				$('#NewPinForm').val("");
				$('#ConfirmPinForm').val("");
				return false;
        	} else { //else other errors ie. couldn't connect to the server
        		alert("Error: Could not connect to field controller");
        		return false;
        	}	
        },
       
    }).responseText;
    resp = JSON.parse(resp);
    return resp.success;
}

