var PIN = "123456";

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
	if ($('#PinForm').val() != PIN)
	{
	alert('Incorrect Existing PIN!');
	return;
	}
	else if ($('#NewPinForm').val() != $('#ConfirmPinForm').val())
	{
	alert('New PIN Fields Do Not Match!');
	return;
	}
	
	alert('PIN Change Success!')
	$('#PinForm').val("");
	$('#NewPinForm').val("");
	$('#ConfirmPinForm').val("");
	
	});
	

});