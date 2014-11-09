var formval = "";
var temperature = "70";

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
		alert('Cannot exceed 100 degrees!')
	} else {
		temperature = formval;
	}
	displayValue();

}

function resetForm(){
	document.getElementById('TemperatureForm').reset;
}

function displayValue(){
	document.getElementById("temperatureDisplay").innerHTML = temperature + "\u00B0";
}