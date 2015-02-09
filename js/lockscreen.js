var PIN = "123456";

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
	if ($('#PinForm').val() != PIN)
	{
	alert('Incorrect PIN!');
	$('#PinForm').val("");
	return;
	}
	
	});
	

});