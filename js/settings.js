var thetime = "5:48 PM";
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


	
    $('#date').editable({
	
		success: function(response, newValue) 
		{
		}
	});
    //make status editable

});

function displayTime(){
document.getElementById("time").innerHTML = thetime;
}
function displayDate(){
var d = new Date();
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
}


