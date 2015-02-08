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
		$("#temperatureDisplay").text(temperature + ' %');
		$.post( "http://localhost:5000/objects/update/", { val: temperature });
	}

}

function resetForm(){
	document.getElementById('TemperatureForm').reset;
}

function displayValue(){
	
	$.getJSON( "http://localhost:5000/objects/list/", function( data ) {
		temperature = data.data[2].value;
			$("#temperatureDisplay").text(temperature);
	});

}
$( document ).ready(function() {
	displayValue();

});