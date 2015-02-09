
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
	$('#PinForm').val("");
	return;
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