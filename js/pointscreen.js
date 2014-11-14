var s1;
var s11;
var s2;
var s22;
var s3;
var s33;
var s4;
var s44;
var s5;
var s55;

function getData(){
	$.getJSON( "http://128.197.180.250:5000/sensors/list/", function( data ) {
		s1 = data.data[0].sname;
		s11 = data.data[0].svalue;
		s2 = data.data[1].sname;
		s22 = data.data[1].svalue;
		s3 = data.data[2].sname;
		s33 = data.data[2].svalue;
		s4 = data.data[3].sname;
		s44 = data.data[3].svalue;
		s5 = data.data[4].sname;
		s55 = data.data[4].svalue;

		$("#s1").text(s1);
		$("#s11").text(s11);
		$("#s2").text(s2);
		$("#s22").text(s22);
		$("#s3").text(s3);
		$("#s33").text(s33);
		$("#s4").text(s4);
		$("#s44").text(s44);
		$("#s5").text(s5);
		$("#s55").text(s55);


	  setTimeout(function () {
    	getData();
    }, 1000);
	});
}

function myFunction() {
    document.getElementById("Humidity").innerHTML = "Entered Humidity Screen!";
}
/*
function displayHum(humidity) {
	$("#humidity").text(humidity);
}

function displayTemp(temperature) {
	$("#temperature").text(temperature);
}*/


$( document ).ready(function() {
	getData();

});