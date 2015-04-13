var formval = "";
var temperature = "";
var units = "";


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
		//$.post( , );
		$.ajax({
		  type: "POST",
		  url: "http://localhost:5000/objects/update/",
		  data: { id: getUrlParameter('id'), val: newval },
		  success: function(msg){
		        alert( "Sensor Value successfully changed" );
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
		     alert("Error: Could not connect with field controller");
		  }
		});
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