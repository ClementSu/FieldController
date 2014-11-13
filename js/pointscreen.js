var humidity = "null";
var temperature = "null";

$.getJSON( "http://128.197.180.250:5000/sensors/list/", function( data ) {
  temperature = data.data[0].svalue;
  humidity = data.data[1].svalue;
});



document.getElementById("Humidity").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("Humidity").innerHTML = "Entered Humidity Screen!";
}

function displayHum() {
	document.getElementById("humidty").innerHTML = humidity;
}

function displayTemp() {
	document.getElementById("temperature").innerHTML = temperature;
}


