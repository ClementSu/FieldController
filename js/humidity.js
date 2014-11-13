var formval = "";
var humidity = "20";

$(document).ready(function() {
				$('#basic').grid({
		    		url: 'http://128.197.180.250:5000/sensors/list/',
		    	});
		    	});

function enterValue( arg ){
	formval = formval + arg;

	document.getElementById("HumidityForm").value = formval;
}

function delValue(){
	formval = formval.substring(0, formval.length - 1);
	document.getElementById("HumidityForm").innerHTML = formval;
}

function submitValue(){
	if (parseInt(formval) > 100){
		alert('Cannot exceed 100% humidity!')
	} else {
		humidity = formval;
	}
	displayValue();

}

function resetForm(){
	document.getElementById('HumidityForm').reset;
}

function displayValue(){
	document.getElementById("humidityDisplay").innerHTML = humidity + "%";
}