var formval = "";
var temperature = "";
var units = "";

function displayDate(){
var d = new Date();
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
}

function displayTime(){
var d = new Date();
var min = d.getMinutes();
if (min < 10)
min = "0" + min.toString();

var sec = d.getSeconds();
if (sec < 10)
sec = "0" + sec.toString();

document.getElementById("time").innerHTML = d.getHours() + ":" + min + ":" + sec;

	  setTimeout(function () {
    	displayTime();
    }, 1000);
}

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 

function enterValue( arg ){
	formval = formval + arg;
	document.getElementById("newvalue").value = formval;
}

function delValue(){
	formval = formval.substring(0, formval.length - 1);
	document.getElementById("newvalue").value = formval;
}

function submitValue(){
		newval = formval;
		$("#valuedisplay").text(newval + ' ' + units);
		$.post( "http://localhost:5000/objects/update/", { id: getUrlParameter('id'), val: newval });
}

function resetForm(){
	document.getElementById('newvalform').reset();
}

function displayValue(){
	$.getJSON( "http://localhost:5000/objects/get/?id=" + getUrlParameter('id'), function( data ) {
		val = data.value.formatted_value;
		$("#valuedisplay").text(val);
		$("#screenname").text(data.value.name);
		units = data.value.units;
	});

}
$( document ).ready(function() {
	displayValue();

});