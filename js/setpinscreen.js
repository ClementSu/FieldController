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

function changePIN(currentpin, newpin) {
	var resp = $.ajax({
        type: "POST",
        url: "http://localhost:5000/auth/set/",
        async: false,
        data: {cpin: currentpin, npin: newpin}
    }).responseText;
    resp = JSON.parse(resp);
    return resp.success;
}
