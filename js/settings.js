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
	
    $('#date').editable();
    //make status editable
    $('#status').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]
        /*
        //uncomment these lines to send data on server
        ,pk: 1
        ,url: '/post'
        */
    });
});

function displayTime(){
document.getElementById("time").innerHTML = thetime;
}