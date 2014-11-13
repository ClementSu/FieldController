var formval = "";
var temperature = "";



function enterValue( arg ){
	formval = formval + arg;

	document.getElementById("TemperatureForm").value = formval;
}

function delValue(){
	formval = formval.substring(0, formval.length - 1);
	document.getElementById("TemperatureForm").value = formval;
}

function submitValue(){
	if (parseInt(formval) > 100){
		alert('Cannot exceed 100% Brightness!')
	} else {
		temperature = formval;
		$.post( "http://128.197.180.250:5000/sensors/update/", { val: temperature } );
	}
	displayValue();	

}

function resetForm(){
	document.getElementById('TemperatureForm').reset;
}

function displayValue(){
	
	$.getJSON( "http://128.197.180.250:5000/sensors/list/", function( data ) {
		temperature = data.data[2].svalue;
			$("#temperatureDisplay").text(temperature);
	});

}
$( document ).ready(function() {
	displayValue();

});